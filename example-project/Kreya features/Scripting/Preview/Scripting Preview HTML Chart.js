kreyaRest.onCallCompleted(async ctx => {
  const dates = ctx.response.content.days.map(d => d.date);
  const quantities = ctx.response.content.days.map(d => d.quantity);
  await kreya.preview.html(
    `
    <html>
      <body>
        <div id="chart" style="width: 100%; height: 100%;"></div>
        <script src="https://cdn.jsdelivr.net/npm/echarts@5.6.0/dist/echarts.min.js"></script>
        <script>
          const chart = echarts.init(document.getElementById('chart'));
          chart.setOption({
              title: {
                text: 'Sales of "${ctx.response.content.book.name}"'
              },
              animation: false,
              xAxis: {
                data: ${JSON.stringify(dates)}
              },
              yAxis: {},
              series: [{
                type: 'bar',
                data: ${JSON.stringify(quantities)}
              }]
          });

          window.addEventListener('resize', () => chart.resize());
        </script>
      </body>
    </html>
    `,
    'Sales',
  );
});
