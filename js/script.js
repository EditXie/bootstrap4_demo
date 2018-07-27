$(document).ready(() => {
	//	js 控制关闭提示组件
	$('.close-alert').click( () => {
		$('.alert').alert('close')
	})
	//	监听关闭按钮
	$('.alert').on('close.bs.alert', () => {
		console.log('close alert')
	})
	$('.alert').on('closed.bs.alert', () => {
		console.log('closed alert')
	})
	
	//js 控制幻灯片切换时间
	$('.carousel').carousel({
//		interval:1000
	})
	
	//js 控制幻灯片切换控制
//	$('.carousel').carousel('next') //下一张
//	$('.carousel').carousel('prev') //上一张
//	$('.carousel').carousel(0) // 第一张
//	$('.carousel').carousel(1) // 第二张
//	$('.carousel').carousel(2) // 第三张
	
	// js 控制左右切换
	$('.carousel').carousel({
		interval:1000
	})
	
	// 监控旋转切换的路径方向
	$('.carousel').on('slide.bs.carousel', (event) => {
		console.log( 'slide: ', `
			方向: ${ event.direction}
			从: ${ event.from }
			到: ${ event.to }
		` )
	})
	$('.carousel').on('slid.bs.carousel', (event) => {
		console.log( 'slid: ', `
			方向: ${ event.direction}
			从: ${ event.from }
			到: ${ event.to }
		` )
	})
	
	//  监听触发按钮方法与事件
	$('#dropdown-demo').on('show.bs.dropdown', () => {
		console.log('show')
	})
	$('#dropdown-demo').on('shown.bs.dropdown', () => {
		console.log('shown')
	})
	$('#dropdown-demo').on('hide.bs.dropdown', () => {
		console.log('hide')
	})
	$('#dropdown-demo').on('hidden.bs.dropdown', () => {
		console.log('hidden')
	})
	
	// js切换标签 方法和事件
	const list = $('#tab-demo .list-group a')
	list.click(function (event) {
		event.preventDefault()
		$(this).tab('show')
	})
	
	list.on('show.bs.tab', function (event) {
		console.log(`开始显示: ${ event.target.getAttribute('href') }'`)
	})
	list.on('shown.bs.tab', function (event) {
		console.log(`完全显示: ${ event.target.getAttribute('href') }`)
	})
	list.on('hide.bs.tab', function (event) {
		console.log(`开始隐藏: ${ event.target.getAttribute('href') }`)
	})
	list.on('hidden.bs.tab', function (event) {
		console.log(`完全隐藏: ${ event.target.getAttribute('href') }`)
	})
	
	// 对话框的选项，方法与事件
	$('#modal-demo').on('show.bs.modal', function() {
		console.log('show')
	})
	$('#modal-demo').on('shown.bs.modal', function() {
		console.log('shown')
	})
	$('#modal-demo').on('hide.bs.modal', function() {
		console.log('hide')
	})
	$('#modal-demo').on('hidden.bs.modal', function() {
		console.log('hidden')
	})
})
