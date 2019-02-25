
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'lodash';
import * as d3Sankey from 'd3-sankey';

@Component({
  selector: 'app-d3-sanky',
  templateUrl: './d3-sanky.component.html',
  styleUrls: ['./d3-sanky.component.scss']
})
export class D3SankyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.DrawChart();
  }
  private DrawChart() {
    const result = {
      'fleetView': [
        {
          'VesselName': 'MOL Emissary',
          'IMO': '9407158',
          'QS': 'Good',
          'SeaState': 'Under Way using engine',
          'STW': '12.4/11.6',
          'DepPort': 'DK RNN',
          'ArrPort': 'DK RNN',
          'Course': '123',
          'Speed': '11.7 km',
          'CurrentDraught': '10 m',
          'Lat': '42.377288',
          'Long': '-40.339918',
          'Start': '2019-02-18T00:42:55Z',
          'End': '0001-01-01T00:00:00Z',
          'FuelConsumption': 100
        },
        {
          'VesselName': 'Gulf Baynunah',
          'IMO': '9381562',
          'QS': 'No connection',
          'SeaState': 'Under Way using engine',
          'STW': '7.0/7.6',
          'DepPort': 'No OSL',
          'ArrPort': 'No OSL',
          'Course': '180',
          'Speed': '20 km',
          'CurrentDraught': '20 m',
          'Lat': '40.473517',
          'Long': '-41.321083',
          'Start': '2019-02-18T01:48:03Z',
          'End': '2019-02-21T00:00:00Z',
          'FuelConsumption': 120
        },
        {
          'VesselName': 'Desert Oasis',
          'IMO': '9543782',
          'QS': 'Good',
          'SeaState': 'Contrained by her draught',
          'STW': '10/11',
          'DepPort': 'DK ANB',
          'ArrPort': 'DK ANB',
          'Course': '155',
          'Speed': '15 km',
          'CurrentDraught': '10 m',
          'Lat': '39.170975 ',
          'Long': '-39.899432',
          'Status': 'Good',
          'Start': '2019-02-18T01:48:49Z',
          'End': '2019-02-23T00:00:00Z',
          'FuelConsumption': 130
        },
        {
          'VesselName': 'Maersk Montana',
          'IMO': '9305312',
          'QS': 'Good',
          'SeaState': 'At anchor',
          'STW': '0/0',
          'DepPort': 'EN LND',
          'ArrPort': 'EN LND',
          'Course': '144',
          'Speed': '19 km',
          'CurrentDraught': '17 m',
          'Lat': '40.969167',
          'Long': '-36.406833',
          'Start': '2019-02-18T01:20:45Z',
          'End': '2019-02-21T00:00:00Z',
          'FuelConsumption': 140
        },
        {
          'VesselName': 'New Elias',
          'IMO': '9313400',
          'QS': 'Bad',
          'SeaState': 'Contrained by her draught',
          'STW': '17.4/18.6',
          'DepPort': 'SE STK',
          'ArrPort': 'SE STK',
          'Course': '165',
          'Speed': '20 km',
          'CurrentDraught': '15 m',
          'Lat': '39.740367',
          'Long': '-42.627767',
          'Start': '2019-02-18T01:49:06Z',
          'End': '2019-02-21T00:00:00Z',
          'FuelConsumption': 150
        },
        {
          'VesselName': 'MSC Bremen',
          'IMO': '9369734',
          'QS': 'Good',
          'SeaState': 'Under Way using engine',
          'STW': '14.4/15.6',
          'DepPort': 'DK RNN',
          'ArrPort': 'DK RNN',
          'Course': '175',
          'Speed': '16 km',
          'CurrentDraught': '11 m',
          'Lat': '39.138167',
          'Long': ' -45.778083',
          'Start': '2019-02-18T01:48:05Z',
          'End': '2019-02-20T00:00:00Z',
          'FuelConsumption': 160
        },
        {
          'VesselName': 'Cornelia Maersk',
          'IMO': '9245756',
          'QS': 'Poor',
          'SeaState': 'Under Way using engine',
          'STW': '4.0/4.0',
          'DepPort': 'ES MAD',
          'ArrPort': 'ES MAD',
          'Course': '111',
          'Speed': '21 km',
          'CurrentDraught': '10 m',
          'Lat': '36.156333',
          'Long': '-42.418667',
          'Start': '2019-02-18T01:50:10Z',
          'End': '2019-02-21T00:00:00Z',
          'FuelConsumption': 170
        },
        {
          'VesselName': 'Elandra Oak',
          'IMO': '9509449',
          'QS': 'Good',
          'SeaState': 'Under Way using engine',
          'STW': '10.4/11.6',
          'DepPort': 'DK RNN',
          'ArrPort': 'DK RNN',
          'Course': '180',
          'Speed': '20 km',
          'CurrentDraught': '11 m',
          'Lat': '35.733118',
          'Long': '-41.567777',
          'Start': '2019-02-18T01:49:21Z',
          'End': '2019-02-24T00:00:00Z',
          'FuelConsumption': 180
        },
        {
          'VesselName': 'Pinza',
          'IMO': '9790232',
          'QS': 'Good',
          'SeaState': 'Under Way using engine',
          'STW': '12.4/11.6',
          'DepPort': 'DK RNN',
          'ArrPort': 'DK RNN',
          'Course': '265',
          'Speed': '14 km',
          'CurrentDraught': '11 m',
          'Lat': '35.628273',
          'Long': '-43.005563',
          'Status': 'Good',
          'Start': '2019-02-18T01:49:37Z',
          'End': '2019-02-28T00:00:00Z',
          'FuelConsumption': 190
        },
        {
          'VesselName': 'Mahadah Silver',
          'IMO': '9718777',
          'QS': 'Good',
          'SeaState': 'Under Way using engine',
          'STW': '22.4/24.6',
          'DepPort': 'DK RNN',
          'ArrPort': 'DK RNN',
          'Course': '214',
          'Speed': '16 km',
          'CurrentDraught': '6 m',
          'Lat': '38.733593',
          'Long': '-48.183363',
          'Status': 'Good',
          'Start': '2019-02-18T01:47:51Z',
          'End': '2019-02-18T00:00:00Z',
          'FuelConsumption': 200
        },
        {
          'VesselName': 'Atlantic Breeze',
          'IMO': '9360336',
          'QS': 'Good',
          'SeaState': 'Under Way using engine',
          'STW': '14.4/16.6',
          'DepPort': 'DK RNN',
          'ArrPort': 'DK RNN',
          'Course': '178',
          'Speed': '18 km',
          'CurrentDraught': '12 m',
          'Lat': '40.05847',
          'Long': '-48.170125',
          'Status': 'Good',
          'Start': '2019-02-18T01:47:15Z',
          'End': '2019-02-25T00:00:00Z',
          'FuelConsumption': 220
        },
        {
          'VesselName': 'Kronviken',
          'IMO': '9321677',
          'QS': 'Good',
          'SeaState': 'Under Way using engine',
          'STW': '20.4/21.6',
          'DepPort': 'DK RNN',
          'ArrPort': 'DK RNN',
          'Course': '198',
          'Speed': '15 km',
          'CurrentDraught': '11 m',
          'Lat': '39.91705',
          'Long': '-49.6788',
          'Status': 'Good',
          'Start': '2019-02-18T01:45:54Z',
          'End': '2019-02-21T00:00:00Z',
          'FuelConsumption': 230
        },
        {
          'VesselName': 'NS Stream',
          'IMO': '9318541',
          'QS': 'Bad',
          'SeaState': 'Under Way using engine',
          'STW': '11.4/11.6',
          'DepPort': 'DK RNN',
          'ArrPort': 'DK RNN',
          'Course': '159',
          'Speed': '16 km',
          'CurrentDraught': '9 m',
          'Lat': '39.899903',
          'Long': '-50.602495',
          'Status': 'Good',
          'Start': '2019-02-17T22:56:15Z',
          'End': '2019-02-19T00:00:00Z',
          'FuelConsumption': 240
        },
        {
          'VesselName': 'Maersk Shenzhen',
          'IMO': '9725160',
          'QS': 'Poor',
          'SeaState': 'Under Way using engine',
          'STW': '15.4/16.6',
          'DepPort': 'DK RNN',
          'ArrPort': 'DK RNN',
          'Course': '256',
          'Speed': '21 km',
          'CurrentDraught': '20 m',
          'Lat': '39.297612',
          'Long': '-51.69671',
          'Status': 'Good',
          'Start': '2019-02-18T01:49:24Z',
          'End': '2019-02-23T00:00:00Z',
          'FuelConsumption': 250
        },
        {
          'VesselName': 'Lambi',
          'IMO': '9595254',
          'QS': 'Good',
          'SeaState': 'Under Way using engine',
          'STW': '25.5/26.6',
          'DepPort': 'DK RNN',
          'ArrPort': 'DK RNN',
          'Course': '297',
          'Speed': '21 km',
          'CurrentDraught': '11 m',
          'Lat': '38.873518',
          'Long': '-53.490838',
          'Status': 'Good',
          'Start': '2019-02-18T01:47:03Z',
          'End': '2019-02-28T00:00:00Z',
          'FuelConsumption': 260
        }
      ]
    };
    const _energy: any = {
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

    const energy: any = {
      nodes: [],
      links: []
    };

    function groupingBy(data, groupby) {
      return _.groupBy(data, groupby);
    }

    function getObjectKeys(groupByData) {
      return Object.keys(groupByData);
    }

    const newGroupValue = groupingBy(result.fleetView, 'VesselName');
    const newKeys = getObjectKeys(newGroupValue);

    const userSelectedColors = ['FuelConsumption'];
    const totalFuelConsumption = _.sumBy(userSelectedColors, _.partial(_.sumBy, result.fleetView));
    console.log(totalFuelConsumption);

    // const formatNumber = d3.format(',.0f');
    const format = function (d: any) { return d + ' Ltrs'; };
    // colors = d3.scaleOrdinal(d3.schemeCategory10);
    const arr = [];
    for (let i = 0; i < newKeys.length - 1; i++) {
      const newval = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
      arr.push(newval);
    }

    energy.nodes.push({ name: totalFuelConsumption, id: 'fallback' });

    for (let i = 0; i < result.fleetView.length; i++) {
      const kk = { name: result.fleetView[i].VesselName, id: 'color_' + i };
      energy.nodes.push(kk);
    }
    let j = 0;
    for (let i = 0; i < result.fleetView.length; i++) {
      const kk = { source: 0, target: ++j, value: result.fleetView[i].FuelConsumption };
      energy.links.push(kk);
    }
    console.log(energy.nodes);
    console.log(energy.links);

    const svg = d3.select('#sankey'),
      width = +svg.attr('width'),
      height = +svg.attr('height');

    const colors = Object.create({});
    for (let x = 0; x < arr.length; x++) {
      colors['color_' + x] = arr[x];
    }
    colors['fallback'] = '#5CAAB5';
    console.log(colors);

    // const colors = {
    //   'environment': '#EEC3E4',
    //   'social': '#D8C7E4',
    //   'animals': '#F08800',
    //   'health': '#FADEB9',
    //   'research_ingredient': '#C1E9D9',
    //   'vessel_6': '#B9DADF',
    //   'fallback': '#5CAAB5'
    // };


    const sankey = d3Sankey.sankey()
      .nodeWidth(15)
      .nodePadding(10)
      .extent([[1, 1], [width - 1, height - 6]]);

    sankey(energy);

    let link = svg.append('g')
      .attr('class', 'links')
      .attr('fill', 'none')
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
      .attr('stroke-opacity', 0.2)
      .style('stroke-width', function (_link: any) {
        return Math.max(1, _link.width);
      })
      .attr('stroke', function (_link: any) {
        return color(_link.target, 4) || color(_link.source, 1) || colors.fallback;
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
      // const id = _node.name.replace(/(_score)?(_\d+)?$/, '');
      const id = _node.id;
      if (colors[id]) {
        return colors[id];
      } else if (depth > 0 && _node.targetLinks && _node.targetLinks.length === 1) {
        return color(_node.targetLinks[0].source, depth - 1);
      } else {
        return null;
      }
    }
  }
}
