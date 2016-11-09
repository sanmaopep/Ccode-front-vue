class scrollUtil {
	//滚动条在Y轴上的滚动距离
	static getScrollTop() {　　
		var scrollTop = 0,
			bodyScrollTop = 0,
			documentScrollTop = 0;　　
		if (document.body) {　　　　
			bodyScrollTop = document.body.scrollTop;　　
		}　　
		if (document.documentElement) {　　　　
			documentScrollTop = document.documentElement.scrollTop;　　
		}　　
		scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;　　
		return scrollTop;
	}
	//文档的总高度
	static getScrollHeight() {　　
		var scrollHeight = 0,
			bodyScrollHeight = 0,
			documentScrollHeight = 0;　　
		if (document.body) {　　　　
			bodyScrollHeight = document.body.scrollHeight;　　
		}　　
		if (document.documentElement) {　　　　
			documentScrollHeight = document.documentElement.scrollHeight;　　
		}　　
		scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;　　
		return scrollHeight;
	}
	//浏览器视口的高度
	static getWindowHeight() {　　
		var windowHeight = 0;　　
		if (document.compatMode == "CSS1Compat") {　　　　
			windowHeight = document.documentElement.clientHeight;　　
		} else {　　　　
			windowHeight = document.body.clientHeight;　　
		}　　
		return windowHeight;
	}
	//添加滑动到底部的事件
	static addScrollToBottom(cb) {
		window.onscroll = function() {　　
			if (scrollUtil.getScrollTop() + scrollUtil.getWindowHeight() == scrollUtil.getScrollHeight()) {　　　　
				cb();　　
			}
		}
	}
	//平滑滚动到顶部
	static scrollTop() {
		let x = scrollUtil.getScrollTop();
		if(x<=0){
			return ;
		}
		let detX = x/25;
		let timer = setInterval(function() {
			x -= detX;
			if (x < detX) {
				x = 0;
				window.scrollTo(x, x);
				clearInterval(timer);
			}
			window.scrollTo(x, x);
		}, 20);
	}
	//滑动到某以高度显示
	static scrollToHeightShow(h,cb){
		scrollUtil.getScrollTop
		//获取滚动条高度
		let height = scrollUtil.getScrollTop() + scrollUtil.getWindowHeight();
		if(height > h){
			cb();
		}else{
			window.addEventListener('scroll',()=>{
				let height = scrollUtil.getScrollTop() + scrollUtil.getWindowHeight();
				if(height > h){
					cb();
				}
			});
		}
	}
	//滑动到某一DOM元素显示
	static scrollToDOMShow(dom,cb){
		let h = dom.offsetTop + dom.offsetHeight/2;
		scrollUtil.scrollToHeightShow(h,cb);
	}
}

export default scrollUtil