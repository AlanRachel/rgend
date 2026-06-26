const CUSTOMER_SITES = {
    1: {
        api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
        name: '1',
    },
    2: {
        api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
        name: '2',
    },
    3: {
        api: 'http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
        name: '3',
    }



};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
