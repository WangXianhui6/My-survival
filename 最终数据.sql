/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.5.40 : Database - ggh
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`ggh` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `ggh`;

/*Table structure for table `alliance` */

DROP TABLE IF EXISTS `alliance`;

CREATE TABLE `alliance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `strength` varchar(50) DEFAULT NULL,
  `reason` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `alliance` */

/*Table structure for table `apply` */

DROP TABLE IF EXISTS `apply`;

CREATE TABLE `apply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(300) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `apply` */

/*Table structure for table `backusers` */

DROP TABLE IF EXISTS `backusers`;

CREATE TABLE `backusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) DEFAULT NULL,
  `pwd` varchar(50) DEFAULT NULL,
  `img` varchar(150) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `mymod` int(11) DEFAULT '2',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `backusers` */

insert  into `backusers`(`id`,`username`,`pwd`,`img`,`email`,`mymod`) values (3,'刚刚好','0869658d451576c90e26d91b6d2a5f37','http://192.168.97.249:3003/upload\\upload_2b98900f4a74eb6e2c0462e54582a22b.jpg','806053092@qq.com',2),(4,'刚好','25d55ad283aa400af464c76d713c07ad','http://192.168.97.249:3003/upload\\upload_47aaa4b5140b348af11ad84171d1b235.jpg','1400187381@qq.com',2),(5,'邓曦','25d55ad283aa400af464c76d713c07ad','http://192.168.97.249:3003/upload\\upload_24dddca71ec019b9677e1ef608539390.jpg','757363985@qq.com',2);

/*Table structure for table `classify` */

DROP TABLE IF EXISTS `classify`;

CREATE TABLE `classify` (
  `s_id` int(11) NOT NULL DEFAULT '0',
  `c_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `classify` */

insert  into `classify`(`s_id`,`c_name`) values (0,'KJ225F-MC6'),(1,'洗漱用品'),(2,'电子产品'),(3,'服装'),(4,'床上用品'),(5,'书籍'),(6,'KJ200F-S18'),(7,'KJ800F-S80'),(8,'KJ400F-S40'),(9,'KJ460F-S46'),(10,'KJ600F-S60'),(11,'KJ400F-MC9'),(12,'KJ800F-MC21'),(13,'MC8'),(14,'KJ600F-MC20'),(15,'KJ310F-MC3'),(16,'KJ225F-MC6');

/*Table structure for table `goods` */

DROP TABLE IF EXISTS `goods`;

CREATE TABLE `goods` (
  `nam` varchar(100) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` double(6,2) DEFAULT NULL,
  `store` int(11) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `s_id` int(11) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

/*Data for the table `goods` */

insert  into `goods`(`nam`,`id`,`price`,`store`,`img`,`s_id`,`intro`) values ('森晨S40家用空气净化器',3,999.99,1,'http://192.168.97.249:3003/upload\\upload_a9ed2ef150bef036c8ce4f3a83bb537f.png',8,'高效的净化能力，稳定可靠的工作表现；德国 CleanPro 专业净化技术，高效除灰尘、雾霾、PM2.5、花粉、细菌等空气'),('森晨S46空气净化器',4,999.99,1,'http://192.168.97.249:3003/upload\\upload_35c6d9f3b47e970bfe79c01f0394a189.png',9,'有颜值有担当 高性价比首选'),('森晨S60空气净化器',5,999.99,1,'http://192.168.97.249:3003/upload\\upload_2103798a6285c97f9c5c040e1514f3dc.png',10,'经典瓷白色圆筒形机身，颜值与性能的完美结合。'),('森晨MC9空气净化器',6,999.99,1,'http://192.168.97.249:3003/upload\\upload_4ee3c567cb5fd742de8035b07a1faa5b.png',11,'入门级的价格，中端机器的性能，完美诠释性价比。外加简约时尚的外观设计，清爽的瓷白色主色，尽显清新典雅本色。'),('森晨MC21空气净化器',7,999.99,1,'http://192.168.97.249:3003/upload\\upload_12d18eba960ecbe29b7f6eabe55d08d4.png',12,'采用多层滤网技术，纳米级自然加湿；杀菌加湿，一体式设计；原装进口核心滤材；杀菌加湿，原装进口核心滤材。'),('森晨MC8空气净化器',8,999.99,1,'http://192.168.97.249:3003/upload\\upload_a521fdedd1c0afdaeca46cb16e69fc11.png',13,'森晨MC8空气净化器'),('森晨MC20空气净化器',9,999.99,1,'http://192.168.97.249:3003/upload\\upload_19c6914091a982360ca6b84fd9dd7ccb.png',14,'高性能高性价比家用、办公室用空气净化器'),('森晨MC3空气净化器',10,999.99,1,'http://192.168.97.249:3003/upload\\upload_a50dfd3752b82092b8eccd5cf7973d97.png',15,'入门级高性价比空气净化器'),('森晨MC3空气净化器',13,1200.00,1,'http://192.168.97.249:3003/upload\\upload_2d9ca40bf021e4ec588cc1bdbf12d20e.png',15,'入门级高性价比空气净化器'),('森晨S18空气净化器',14,1200.00,1,'http://192.168.97.249:3003/upload\\upload_f463baa73783e8f8a6af704523ff02a4.png',6,'森晨 KJ200F-S18除菌空气净化器，采用SRV中药草本除菌留香净化技术，有效杀灭各种病菌以及空气中的其他污染物。'),('哈哈',15,123.00,1,'http://192.168.97.249:3003/upload\\upload_77fadbbbb11716912d9b7c08c3bf9faa.jpg',3,'喜笑颜开');

/*Table structure for table `jlunbo` */

DROP TABLE IF EXISTS `jlunbo`;

CREATE TABLE `jlunbo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `jlunbo` */

insert  into `jlunbo`(`id`,`img`) values (1,'http://192.168.97.249:3003/upload/join1.jpg'),(2,'http://192.168.97.249:3003/upload/join2.jpg'),(3,'http://192.168.97.249:3003/upload/join3.jpg'),(4,'http://192.168.97.249:3003/upload/join4.jpg'),(5,'http://192.168.97.249:3003/upload/join5.jpg'),(6,'http://192.168.97.249:3003/upload/join6.jpg');

/*Table structure for table `lunbo` */

DROP TABLE IF EXISTS `lunbo`;

CREATE TABLE `lunbo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `lunbo` */

insert  into `lunbo`(`id`,`img`) values (1,'http://192.168.97.249:3003/upload/carosol.jpg'),(2,'http://192.168.97.249:3003/upload/carosol1.jpg'),(3,'http://192.168.97.249:3003/upload/carosol2.jpg'),(4,'http://192.168.97.249:3003/upload/carosol3.jpg'),(5,'http://192.168.97.249:3003/upload/carosol4.jpg'),(6,'http://192.168.97.249:3003/upload/carosol5.jpg');

/*Table structure for table `shop_company` */

DROP TABLE IF EXISTS `shop_company`;

CREATE TABLE `shop_company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `province` varchar(10) DEFAULT NULL,
  `company` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

/*Data for the table `shop_company` */

insert  into `shop_company`(`id`,`province`,`company`,`address`) values (1,'北京','北京莆润施环保科技有限公司','北京市大兴区芦求路28号'),(2,'湖北',' 武汉市广联可利科技有限公司','武汉市江岸区工农兵路'),(3,' 河北',' 廊坊鑫能健康科技有限公司',' 廊坊开发区艾力枫杠国际广场F栋30室'),(4,' 河北',' 保定清泉净化设备有限公司','有限公司 保定市南二环路东段3635号'),(5,'北京',' 北京仕德恒业技术有限公司','北京市平谷区马坊物流基地东区352号'),(6,'河南',' 郑州中斯达环境科技有限公司',' 郑州市金水区丰产路36号综合楼3层'),(7,'四川','四川优家净商贸有限公司','成都市金牛区金府路593号8栋3单元19层8号'),(8,'香港','国际贸易（香港）有限公司','北京市东城区安定门东路28号雍和大厦B座1011室'),(9,'江苏',' 南京松泰装饰有限公司','南京市建邺区庐山路128号747室'),(10,'广东',' 深圳市世晨环保科技有限公司','深圳市福田区梅林龙尾路福利工业区十号楼101号'),(11,'北京','北京长林清源环保技术有限公司','北京市密云县经济开发区兴盛南路8号开发区办公楼501室-124'),(12,'天津','天津益达康科技发展有限公司','天津市河北区井田大厦6层'),(13,'江苏','南通康诺净化科技有限公司','江苏省如皋市经济开发区如皋科技创业园综合楼102'),(14,'北京','北京微酷智能科技有限公司',' 北京市朝阳区望京西园222号'),(15,'辽宁',' 斯蒂英尼环保科技有限公司（大连）','辽宁省大连市西岗区新起屯新秀街18号楼1单元1层'),(16,'山东','青岛舒可德健康科技有限公司','青岛市黄岛区灵珠山办事处柳东社区办公楼52-2号068室'),(17,'浙江','杭州古玛贸易有限公司','杭州市下城区庆春路118号1408室'),(18,'河南',' 郑州斯美菲贸易有限公司','郑州市金水区东风路3号附3号19层1913号4号'),(19,'河北','河北狮源健康投资有限公司','河北沧州市东风东路'),(20,'江苏','江苏 苏州佛果生物科技有限公司',' 太仓市沙溪镇半泾河路2号'),(21,'浙江',' 台州环洋机电有限公司',' 温岭市泽国镇姜家村'),(22,'湖北','武汉慧联无限科技有限公司','武汉市东湖新技术开发区软件园东路1号光谷展示中心扩建项目D座1层1室108-116室'),(23,'江苏',' 无锡慧宝星信息科技有限公司',' 无锡惠山经济开发区智慧路1号清华创新大厦B2439(开发区）'),(24,'四川',' 成都赫斯利文科技有限公司','成都高新区天府三街69号1栋21层2106号'),(25,'北京','北京莆润施环保科技有限公司','北京市大兴区芦求路28号北京市大兴区芦求路28号'),(26,'北京','北京莆润施环保科技有限公司','北京市大兴区芦求路28号北京市大兴区芦求路28号'),(27,'北京','北京莆润施环保科技有限公司','北京市大兴区芦求路28号北京市大兴区芦求路28号'),(28,'北京','北京莆润施环保科技有限公司','北京市大兴区芦求路28号北京市大兴区芦求路28号'),(29,'北京','北京莆润施环保科技有限公司','北京市大兴区芦求路28号北京市大兴区芦求路28号'),(30,'北京','北京莆润施环保科技有限公司','北京市大兴区芦求路28号北京市大兴区芦求路28号'),(31,'北京','北京莆润施环保科技有限公司','北京市大兴区芦求路28号北京市大兴区芦求路28号'),(32,'北京','北京莆润施环保科技有限公司','北京市大兴区芦求路28号北京市大兴区芦求路28号'),(33,'贵州','小伟伟','贵州省雷山县大十字中心1'),(34,'贵州','x','贵州省雷山县大十字中心');

/*Table structure for table `shops` */

DROP TABLE IF EXISTS `shops`;

CREATE TABLE `shops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `modelnum` varchar(30) DEFAULT NULL,
  `name` varchar(40) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `shops` */

insert  into `shops`(`id`,`modelnum`,`name`,`intro`,`img`) values (1,'KJ200F-S18','森晨S18空气净化器','森晨 KJ200F-S18除菌空气净化器，采用SRV中药草本除菌留香净化技术，有效杀灭各种病菌以及空气中的其他污染物。',NULL),(2,'KJ800F-S80','森晨S80除菌除甲醛空气净化器','外观时尚典雅，集杀菌、除霾、除甲醛和空气净化等功能于一体，高效除灰尘、雾霾、PM2.5、花粉、细菌等空气污染物。',NULL),(3,'KJ400F-S40','森晨S40家用空气净化器','高效的净化能力，稳定可靠的工作表现；德国 CleanPro 专业净化技术，高效除灰尘、雾霾、PM2.5、花粉、细菌等空气',NULL),(4,'KJ460F-S46','森晨S46空气净化器','有颜值有担当 高性价比首选',NULL),(5,'KJ600F-S60','森晨S60空气净化器','经典瓷白色圆筒形机身，颜值与性能的完美结合。',NULL),(6,'KJ400F-MC9','森晨MC9空气净化器','入门级的价格，中端机器的性能，完美诠释性价比。外加简约时尚的外观设计，清爽的瓷白色主色，尽显清新典雅本色。',NULL),(7,'KJ800F-MC21','森晨MC21空气净化器','采用多层滤网技术，纳米级自然加湿；杀菌加湿，一体式设计；原装进口核心滤材；杀菌加湿，原装进口核心滤材。',NULL),(8,'MC8','森晨MC8空气净化器','森晨MC8空气净化器',NULL),(9,'KJ600F-MC20','森晨MC20空气净化器','高性能高性价比家用、办公室用空气净化器',NULL),(10,'KJ310F-MC3','森晨MC3空气净化器','入门级高性价比空气净化器',NULL),(11,'KJ225F-MC6','森晨MC6空气净化器','入门级高性价比空气净化器，低价买好货',NULL);

/*Table structure for table `stu` */

DROP TABLE IF EXISTS `stu`;

CREATE TABLE `stu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nam` varchar(20) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `weight` double(4,1) DEFAULT NULL,
  `height` double(4,1) DEFAULT NULL,
  `size` char(1) DEFAULT NULL,
  `sex` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `stu` */

insert  into `stu`(`id`,`nam`,`age`,`weight`,`height`,`size`,`sex`) values (1,'小胖',18,60.5,155.5,'d','女'),(2,'小美',19,50.5,160.5,'b','女'),(3,'小欣',20,52.5,165.5,'c','女'),(4,'小王',19,55.5,170.5,'a','男'),(5,'小强',20,60.5,170.5,'a','男');

/*Table structure for table `successcase` */

DROP TABLE IF EXISTS `successcase`;

CREATE TABLE `successcase` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `successcase` */

/*Table structure for table `suggest` */

DROP TABLE IF EXISTS `suggest`;

CREATE TABLE `suggest` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `tel` varchar(30) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `message` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `suggest` */

insert  into `suggest`(`id`,`username`,`tel`,`email`,`message`) values (5,'阿萨德','15212345678','1400187381@qq.com','阿萨德撒'),(6,'12','18286230927','1481141106@qq.com','胡歌'),(7,'未闻花名','18286230927','1481141106@qq.com','我好累呀'),(8,'未闻花名','18286230927','1481141106@qq.com','我想加入'),(9,'哈哈','18286230927','1481141106@qq.com','哈空间被国家环保局看了'),(10,'哈哈','18286230927','1481141106@qq.com','我好漂亮');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `position` varchar(10) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `users` */

/*Table structure for table `varify` */

DROP TABLE IF EXISTS `varify`;

CREATE TABLE `varify` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `code` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `varify` */

insert  into `varify`(`id`,`email`,`code`) values (1,'806053092@qq.com','8866'),(2,'806053092@qq.com','7005'),(3,'806053092@qq.com','2890'),(4,'1400187381@qq.com','7792'),(5,'1400187381@qq.com','9620'),(6,'757363985@qq.com','7477');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
