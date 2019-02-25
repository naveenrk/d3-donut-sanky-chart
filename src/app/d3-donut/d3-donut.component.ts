import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'lodash';

@Component({
  selector: 'app-d3-donut',
  templateUrl: './d3-donut.component.html',
  styleUrls: ['./d3-donut.component.css']
})
export class D3DonutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
          'End': '0001-01-01T00:00:00Z'
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
          'End': '2019-02-21T00:00:00Z'
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
          'End': '2019-02-23T00:00:00Z'
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
          'End': '2019-02-21T00:00:00Z'
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
          'End': '2019-02-21T00:00:00Z'
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
          'End': '2019-02-20T00:00:00Z'
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
          'End': '2019-02-21T00:00:00Z'
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
          'End': '2019-02-24T00:00:00Z'
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
          'End': '2019-02-28T00:00:00Z'
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
          'End': '2019-02-18T00:00:00Z'
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
          'End': '2019-02-25T00:00:00Z'
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
          'End': '2019-02-21T00:00:00Z'
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
          'End': '2019-02-19T00:00:00Z'
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
          'End': '2019-02-23T00:00:00Z'
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
          'End': '2019-02-28T00:00:00Z'
        }
      ]
    };

    function groupingBy(data, groupby) {
      return _.groupBy(data, groupby);
    }

    function getObjectKeys(groupByData) {
      return Object.keys(groupByData);
    }

    const newGroupValue = groupingBy(result.fleetView, 'SeaState');
    const newKeys = getObjectKeys(newGroupValue);

    const dataset = [];
    // tslint:disable-next-line: forin
    for (const k in newGroupValue) {
      const kk = { name: k, value: newGroupValue[k].length };
      dataset.push(kk);
    }
    const userSelectedColors = ['value'];
    const totalCount = _.sumBy(userSelectedColors, _.partial(_.sumBy, dataset));

    console.log(totalCount);


    const color = d3.scaleOrdinal()
      .domain(newKeys)
      .range(['#8BC2CA', '#5CAAB5', '#B9DADF']);

    const pie = d3.pie()
      .value(function (d: any) { return d.value; })
      .sort(null)
      .padAngle(.03);

    const w = 250, h = 200;

    // donut size
    const outerRadius = 60;
    const innerRadius = 100;

    const arc = d3.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);

    const svg = d3.select('#chart')
      .append('svg')
      .attr('width', w)
      .attr('height', h + 100)
      .attr('class', 'shadow')
      .append('g')
      .attr('transform', 'translate(' + w / 2 + ',' + h / 2 + ')');


    const path = svg.selectAll('path')
      .data(pie(dataset))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: any) => color(d.data.name));

    path.transition()
      .duration(1000)
      .attrTween('d', function (d) {
        const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function (t) {
          return arc(interpolate(t));
        };
      });


    const restOfTheData = function () {
      const text = svg.selectAll('text')
        .data(pie(dataset))
        .enter()
        .append('text')
        .attr('transform', function (d: any) {
          const _d = arc.centroid(d);
          _d[0] *= 1;	// multiply by a constant factor
          _d[1] *= 1;	// multiply by a constant factor
          return 'translate(' + _d + ')';
        })
        .attr('dy', '.50em')
        .attr('text-anchor', 'middle')
        .style('text-anchor', 'middle')
        .text((d: any) => {
          return d.data.value;
        });

      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('font-size', '2.5em')
        .attr('y', 8)
        .text(totalCount);

        svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('font-size', '1.5em')
        .attr('y', 25)
        .text('vessel');

      const legendRectSize = 20;
      const legendSpacing = 7;
      const legendHeight = legendRectSize + legendSpacing;


      const legend = svg.selectAll('.legend')
        .data(color.domain())
        .enter()
        .append('g')
        .attr('class', '.legend')
        .attr('transform', (d: any, i: any) => 'translate(-95,' + ((i * legendHeight) + 110) + ')');

      legend.append('rect')
        .attr('width', legendRectSize)
        .attr('height', legendRectSize)
        .attr('rx', 20)
        .attr('ry', 20)
        .style('fill', color);

      legend.append('text')
        .attr('x', 30)
        .attr('y', 15)
        .text(function (d) {
          return d;
        })
        .attr('fill', '#152935')
        .attr('font-size', '1.2em');
    };
    setTimeout(restOfTheData, 1000);
  }

}
