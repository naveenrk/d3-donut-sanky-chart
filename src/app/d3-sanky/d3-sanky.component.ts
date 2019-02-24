import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'lodash';
import * as d3Sankey from 'd3-sankey';

@Component({
  selector: 'app-d3-sanky',
  templateUrl: './d3-sanky.component.html',
  styleUrls: ['./d3-sanky.component.css']
})
export class D3SankyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.DrawChart();
  }
  private DrawChart() {
    const svg = d3.select('#sankey'),
      width = +svg.attr('width'),
      height = +svg.attr('height');

    // const formatNumber = d3.format(',.0f');
    const format = function (d: any) { return d + ' TWh'; },
      // color = d3.scaleOrdinal(d3.schemeCategory10);
      colors = {
        'environment': '#EEC3E4',
        'social': '#D8C7E4',
        'animals': '#F08800',
        'health': '#FADEB9',
        'research_ingredient': '#C1E9D9',
        'vessel_6': '#B9DADF',
        'fallback': '#5CAAB5'
      };
    // d3.json("./energy.json", function (error, energy: any) {
    // if (error) throw error;

    const energy: any = {
      nodes: [
        {
          name: 'Vessel 0',
          id: 'aggregated_consumption'
        },
        {
          name: 'Vessel 1',
          id: 'environment'
        },
        {
          name: 'Vessel 2',
          id: 'social'
        },
        {
          name: 'Vessel 3',
          id: 'animals'
        },
        {
          name: 'Vessel 4',
          id: 'health'
        },
        {
          name: 'Vessel 5',
          id: 'research_ingredient'
        },
        {
          name: 'Vessel 6',
          id: 'vessel_6'
        }
      ],
      links: [
        {
          source: 0,
          value: 0.342284047256003,
          target: 1
        },
        {
          value: 0.32322870366987,
          source: 0,
          target: 2
        },
        {
          value: 0.177682517071359,
          source: 0,
          target: 3
        },
        {
          value: 0.137241325342711,
          source: 0,
          target: 4
        },
        {
          value: 0.2433076373512774,
          source: 0,
          target: 5
        },
        {
          value: 0.1296956039863467,
          source: 0,
          target: 6
        }
      ]
    };

    const sankey = d3Sankey.sankey()
      .nodeWidth(15)
      .nodePadding(10)
      .extent([[1, 1], [width - 1, height - 6]]);

    sankey(energy);

    let link = svg.append('g')
      .attr('class', 'links')
      .attr('fill', 'none')
      .attr('stroke-opacity', 0.2)
      .selectAll('path');

    let node = svg.append('g')
      .attr('class', 'nodes')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 20)
      .selectAll('g');

    link = link
      .data(energy.links)
      .enter().append('path')
      .attr('class', 'link')
      .attr('d', d3Sankey.sankeyLinkHorizontal())
      .style('stroke-width', function (_link: any) {
        return Math.max(1, _link.width);
      })
      .attr('stroke', function (_link: any) {
        return color(_link.source, 4) || color(_link.target, 1) || colors.fallback;
      });

    link.append('title')
      .text(function (d: any) {
        return d.source.name + ' → ' + d.target.name + '\n' + format(d.value);
      });

    node = node
      .data(energy.nodes)
      .enter().append('g');

    node.append('rect')
      .attr('x', function (d: any) { return d.x0; })
      .attr('y', function (d: any) { return d.y0; })
      .attr('height', function (d: any) { return d.y1 - d.y0; })
      .attr('width', function (d: any) { return d.x1 - d.x0; })
      .attr('fill', function (_node: any) { return color(_node, 1) || colors.fallback; })
      .attr('stroke', function (_node: any) { return color(_node, 1) || colors.fallback; });

    node.append('text')
      .attr('x', function (d: any) { return d.x0 - 6; })
      .attr('y', function (d: any) { return (d.y1 + d.y0) / 2; })
      .attr('dy', '0.35em')
      .attr('text-anchor', 'end')
      .attr('font-size', '14px')
      .text(function (d: any) { return d.name; })
      .filter(function (d: any) { return d.x0 < width / 2; })
      .attr('x', function (d: any) { return d.x1 + 6; })
      .attr('text-anchor', 'start');

    node.append('title')
      .text(function (d: any) { return d.name + '\n' + format(d.value); });

    function color(_node: any, depth: any) {
      const id = _node.id.replace(/(_score)?(_\d+)?$/, '');
      if (colors[id]) {
        return colors[id];
      } else if (depth > 0 && _node.targetLinks && _node.targetLinks.length == 1) {
        return color(_node.targetLinks[0].source, depth - 1);
      } else {
        return null;
      }
    }
  }
}
