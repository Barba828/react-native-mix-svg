//  getSvg.js
let fs = require("fs");
let path = require("path");
let count = 0;
const svgDir = path.resolve(__dirname, "../assets/SVG");

// 读取单个文件
const readfile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(svgDir, filename), "utf8", function (err, data) {
      if (err) {
        reject(err);
      }
      resolve({
        [filename.slice(0, filename.lastIndexOf("."))]: data,
      });
    });
  });
};

// 读取SVG文件夹下所有svg
const readSvgs = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(svgDir, function (err, files) {
      if (err) {
        reject(err);
      }
      Promise.all(
        files.map((filename) => {
          count++;
          console.log("\033[40;32m " + filename + "\033[0m");
          return readfile(filename);
        })
      )
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  });
};

// 生成js文件
readSvgs()
  .then((data) => {
    let svgFile =
      "export default " + JSON.stringify(Object.assign.apply(this, data));
    fs.writeFile(
      path.resolve(__dirname, "../assets/svgs.js"),
      svgFile,
      function (err) {
        if (err) {
          throw new Error(err);
        }
      }
    );
    console.log(
      "\033[42;30m DONE \033[40;32m Created " +
        count +
        " files successfully \033[0m"
    );
  })
  .catch((err) => {
    console.error(" files failed");
    throw new Error(err);
  });
