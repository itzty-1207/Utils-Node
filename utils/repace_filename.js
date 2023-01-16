const fs = require('fs');

fs.readdir('./', (err, list) => {
  list.forEach((item) => {
    if (item.startsWith('javascript')) {
      fs.rename('./' + item, './' + item.replace('javascript', 'js'), () => {
        console.log('文件名转换完成！');
      });
    }
  });
});
