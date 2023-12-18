import html2canvas from 'html2canvas'
let canvasBox: any
export const downloadImg = (domName: any, fileName: string) => {
  canvasBox = window.document.querySelector(domName)
  // 截图
  // 手动创建一个 canvas 标签
  setTimeout(() => {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    // 获取父标签，意思是这个标签内的 DOM 元素生成图片
    // 获取父级的宽高
    const width = canvasBox.offsetWidth;
    const height = canvasBox.offsetHeight;
    // 宽高 * 2 并放大 2 倍 是为了防止图片模糊
    canvas.width = width * 2;
    canvas.height = height * 2;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    const context: any = canvas.getContext("2d"); // 获取2d上下文对象
    context.scale(2, 2); // 放大倍数
    const options = {
      width: width,
      height: height,
      // backgroundColor: "#FFFFFF",
      canvas: canvas,
      useCORS: true,
      scale: 1, // 渲染比例
      dpi: 300,
    };
    html2canvas(canvasBox, options).then((canvas) => {
      // toDataURL 图片格式转成 base64
      let dataURL = canvas.toDataURL("image/png")
      downloadImage(dataURL, fileName + +new Date(),)
    })
  }, 200);
}
// 下载图片
const downloadImage = (url: any, name: string) => {
  // 如果是在网页中可以直接创建一个 a 标签直接下载
  let a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
}