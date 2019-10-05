/* ES module 模块引入方式 */
/* CommonJs 模块引入规范 */
/* CMD */
/* ADM */
/* webpack 模块打包工具 */

/* js 模块打包工具 ->  */

/* import Header from './header.js';
import Sidebar from './sidebar.js';
import Content from './content.js'; */
import avatar from './1.jpg';
import style from './index.scss';


var Header = require('./header.js');
var Sidebar = require('./sidebar.js');
var Content = require('./content.js');
/* var avatar = require('./1.jpg'); */
new Header();
new Sidebar();
new Content();

var img = new Image();
img.src = avatar;
img.classList.add(style.avatar);

var root = document.getElementById('root');
root.append(img);