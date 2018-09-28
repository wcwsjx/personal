window.onload = function() {

	//图表
	var myChart = echarts.init(document.getElementById('main'));

	// 指定图表的配置项和数据
	var option = {
		series: [
		{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			data: [{
					value: 235,
					name: 'ps'
				},
				{
					value: 274,
					name: 'html'
				},
				{
					value: 410,
					name: 'javascript'
				},
				{
					value: 435,
					name: 'jQuery'
				},
				//              {value:400, name:''}
			],
			roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255)'
                    }
                    
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255)'
                    }, 
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
		}
		]
		
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

}