function createCar(name,model, engine, value, img){				
	var car = {} ;

	if(img === undefined){
		car.img = []
	}
	else{
		car.img = img
	}
													
	car.name = name ;
	car.engine = engine ;
	car.value = value ;
	car.model = model ;
	car.addimg = addimg ;
	return car ;
}
var addimg = function(src){
	this.img.push(src)
};


var objResult ;
var imagestring = ''

var blueE30 = createCar('huricane','e30', 'M52','20k$',['https://i.pinimg.com/originals/16/e0/69/16e069abedb17e3f40d6755f9fffb2de.jpg', 'https://images.wallpaperscraft.com/image/bmw_e30_drift_front_view_103424_800x1200.jpg', 'https://images.cdn.circlesix.co/image/1/700/0/uploads/posts/2018/02/eacf232539b5e5c7bb284c8c2fc6c434.jpg'])
var rede30 = createCar('Bad blood','e30', 'M20','12k$',['https://i.imgur.com/tBPyEBt.jpg', 'https://wallpapercave.com/wp/pVjabD0.jpg', 'https://wallpaperaccess.com/full/803849.jpg'] )
var Blacke30 = createCar('Night Blood','e30', 'M50 turbo','22k$',['http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2016/06/15084308/2016-Players-Classic-Spotlight-BMW-E30-by-Paddy-McGrath-9-1200x800.jpg','https://wallpapercave.com/wp/wp2885200.jpg', 'http://digitalimagemakerworld.com/images/bmw-e30/36582377-bmw-e30.jpg'] )
var rede36 = createCar('E36','e46', 'M50','18k$',['https://www.auto-forever.com/wp-content/uploads/2017/02/100_E36_3-series_1993-1996_coupe-1030x773.jpg','https://wallpapercave.com/wp/wp2885200.jpg'])
var huricane = createCar('invinsible','e30', 'M43','12k$',['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXD84p6B9GTmiBSPa-TADWVEBVl3uaI2Wb_vz9rZQQ8yQ_es8&s','https://i.pinimg.com/originals/8d/aa/2d/8daa2d22c2a57235c343dafdeb7add08.jpg','https://www.drifted.com/wp-content/uploads/2018/02/e36-coilover-guide.jpg'])
var rain = createCar('stay tuned','e36', 'M50','16k$',['https://i.ytimg.com/vi/a9_qppChhTo/maxresdefault.jpg','https://previews.123rf.com/images/evrenkalinbacak/evrenkalinbacak1609/evrenkalinbacak160900420/62094496-izmit-turkey-august-28-2016-ozer-mollamehmetoglu-drives-bmw-e36-m3-of-teamart-dream-drift-team-in-ap.jpg','https://previews.123rf.com/images/evrenkalinbacak/evrenkalinbacak1609/evrenkalinbacak160900422/62094498-izmit-turquie-28-ao%C3%BBt-2016-kemal-ozhaseki-conduit-bmw-e36-m3-de-l-%C3%A9quipe-jdm-works-d-dans-la-s%C3%A9rie-izmit-.jpg'])
var redee36 = createCar('etra spicy','e36', 'M50','31k$',['https://seegerdezign.com/wp-content/uploads/2018/03/e36-seeger-bumper-720x321.jpg', 'https://c8.alamy.com/comp/FAYWM9/kemal-ozhaseki-drives-bmw-e36-m3-turbo-of-nankang-bimmer-team-in-apex-FAYWM9.jpg'])
var danha  = createCar('nowa','e36', 'M20','12k$',['https://previews.123rf.com/images/evrenkalinbacak/evrenkalinbacak1601/evrenkalinbacak160100459/50394478-istanbul-turquie-31-octobre-2015-ozer-mollamehmetoglu-conduit-bmw-m3-e36-turbo-de-nankang-%C3%A9quipe-de-dr.jpg'])
var helloz = createCar('see you','e36', 'M20','12k$',['https://i.ytimg.com/vi/rrNIfxh-KwE/maxresdefault.jpg'])
var x = createCar('oups','e36', 'M20','12k$','https://www.driftworks.com/forum/attachments/276874/')
var y = createCar('extra love','e36', 'M20','12k$',['https://c.wallhere.com/photos/f9/43/car_YASIDDESIGN_render_artwork_BMW_BMW_M3_E46_BMW_E46_race_cars-46145.jpg!d'])
var z = createCar('Bad blood','e36', 'M20','12k$',['https://23pah8520q22plrod2gvdcur-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/bmw-frozen-grey-e46-m3-modified-aftermarket-forgestar-retro-wheel-e.jpg', 'https://c8.alamy.com/comp/KCKKEX/istanbul-turkey-july-29-2017-kemal-ozhaseki-drives-bmw-e36-m3-of-jdm-KCKKEX.jpg'])
var ze = createCar('ehausted','e36', 'M20','12k$',['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOn1OGGRVBhyC8kL0DhQYIyALDQA07bDGhcj6bswxVucMDiTHsyQ&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHAf82BoSrJW4G_IdDcSYJqaX3wa2tLu-o9qAQRYmaJHhOKbH&s'])
var reezde30 = createCar('next','e34', 'M20','12k$',['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVwj2EjRwtSzW9QNN3JcNzb67-MIkcJhDYBn-4Pkz3U0udGXu&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXq097I4c9ybeW3kn-VQHHbNKYRXeWg__7dnrBc_QEcXT4ntf&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WZc6_BNHlZUgDFZWypwL7wVZe-w3AD3za2WxejlxoG1UkMDqdw&s'])
var redety30 = createCar('hexa','e36', 'M20','12k$',['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ctFICrlmtn69XjXkko-qo3MCSmAhbwf_1Y-CstZHMI6WbKTi&s','https://www.picclickimg.com/00/s/MTA2OVgxNjAw/z/rqEAAOSw-wJaShwC/$/118-Tuning-BMW-M5-E34-Limousine-Daytona-_1.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WZc6_BNHlZUgDFZWypwL7wVZe-w3AD3za2WxejlxoG1UkMDqdw&s'])
var rede3try0 = createCar('exercise','e36', 'M20','12k$',['https://engineswapdepot.com/wp-content/uploads/2019/08/Carbon-Fiber-E46-M3-with-a-S65-V8-01.jpg','https://assets.catawiki.nl/assets/2019/6/27/9/3/b/93b55422-e0f3-4637-bf45-41988efa3e9a.jpg','https://cdn.motor1.com/images/mgl/Ry0EA/s1/this-euro-spec-1991-bmw-m5-is-clean-mean-and-on-ebay.jpg'])
var rede3ui0 = createCar('ex guirlfriend','e36', 'M40','12k$',['https://i.imgur.com/tBPyEBt.jphttps://cdn.bimmertoday.de/wp-content/uploads/2015/08/2001-BMW-M3-GTR-Street-E46-V8-Serie-Strassenzulassung-02.jpg','https://i.pinimg.com/originals/0d/bf/07/0dbf07c9c035cf56e223cedfa5e95cbf.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx6XTruBo6tIJCPetrRfMIWz7mV6gA0oHXfoUIJj5H4TjM9DP6eQ&s'])
var r390 = createCar('buzzer','e36', 'M54','12k$',['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6i3m9V27z8iFtIQ_CXAVwxsRCG-RMLyqnh4abzhoeD0ZlLtd&s','http://d3lp4xedbqa8a5.cloudfront.net/imagegen/p/1200/630/s3/digital-cougar-assets/tradeuniquecars/2018/06/01/168685/1991-BMW-E34-M5-today-s-tempter.jpg','https://www.largus.fr/images/images/bmw-m5-uk-spec-50.jpg?width=940&quality=80'])


var rfge30 = createCar('Bad girl','e39', 'M50','12k$',['https://i.pinimg.com/originals/5e/59/70/5e5970225b4e2d6c6b9dfcdcfbf45abe.jpg', 'https://i.pinimg.com/originals/a2/20/46/a22046a42ec52c25e8d9cd9368a7b364.jpg'])
var rprue30 = createCar('night walker','e39', 'M51','12k$',['https://cdn.bmwblog.com/wp-content/uploads/2017/04/BMW-E39-M5-By-Vorsteiner-Image-27.jpg'])
var reert30 = createCar('winter','e39', 'M57','12k$',['https://judsonconcept.com/img/avtomobili/490/bmv-e39-otzivi-vladelcev-tehnicheskie-harakteristiki-zayavlennaya-moshnost-i-rashod-topliva.jpg'])
var reduy0 = createCar('black moon','e39', 'M51','12k$',['https://i.ytimg.com/vi/b71ZJPL6JPc/maxresdefault.jpg'])
var carsArr = [reduy0, reert30, rprue30, rfge30, r390, rede3try0, redety30, reezde30, ze, z, y, x, helloz, danha, redee36, rain, huricane, rede36, Blacke30, rede30, blueE30]




//navigation bar opening and close
$('#opennav').hover( function(){
	
	$("#navbar").css("display", "block").animate(5000) ;
	
	$('#opennav').hide() ;
	
})

$('#closenav').on('click', function(){
	
	$("#navbar").css("display", "none") ;
	$('#opennav').show(1000) ; 
	
})



//display function
function display(arr){

	$('#main').html('')	   
   for(var i =0; i < arr.length;i++){					
  var imgdiv = $('<div class ="imagediv"></div>')
	var img = $('<img id=imageid>')

	    img.attr('src', arr[i].img[0])
    imgdiv.append(img)
   $('#main').append(imgdiv)
}
}

display(carsArr)





//add the image clicked to the popup screen

$('body').on('click','.imagediv', function() {
	console.log($(this).html())
	imagestring = $(this).html() ;
	lookForObject(imagestring) ;
	$(this).find('img').appendTo('#caption') ;
	$($(this.html)).appendTo('#showelement') ;
	$('#showelement').show() ;

})



//buttons to slide images
var i = 0 ;
$('#left').on('click',function(){
	if(i === objResult['img'].length-1){
		i=0
	}
	else{
 i = i-1 ;
} 
	$('#showelement').find('#imageid').attr('src',objResult['img'][i])

})

$('#right').on('click',function(){
	if(i === objResult['img'].length-1){
		i=0
	}
	else{
 i = i+1 ;
} 
	$('#showelement').find('#imageid').attr('src',objResult['img'][i])

})



//this function look for the object from the image clicked
		
function lookForObject(str){	
  																																						//this variable takes the html text  
  var arrayof= str.split('')																								//now we extract the image source from that selection  
  var newArr = arrayof.slice(arrayof.indexOf('h'),arrayof.length -2).join('') ;		 
	console.log(newArr)																																							//this object will represents the source obj of the image we clicked on
for(var i =0; i<carsArr.length; i++){
  for(var j = 0; j<carsArr[i]['img'].length; j++)	{	 																				//we loop the meals array and we look for the object that contains the image we clicked on
	if(carsArr[i]['img'][j] === newArr){

	 objResult = carsArr[i]																													//whenever we find that object we put it in the variable
	}
}
}
return objResult	
}


$('.close').on('click', function() { 
  $('#showelement').hide()
  i = 0 ;
} )


//search function
function search(arr, key){	
var result = undefined ;															
	result = arr.filter(function(element){		
	return element.model === key ;
	})
	return result;
}



$('body').on('click','.sidebuttons', function(){
	var key = this.id.split('') ;
	key.splice(3,1)
	var realkey = key.join('')
	

	var result = search(carsArr,realkey)
	display(result)	
})

$('body').on('click','#allcars', function(){
	display(carsArr)
})

//here the function that creates an object from the users data

$('#submitaddcar').on('click',function(){
	var carname = $('#carName').val()
	var carmodel = $('#carmodel').val()
	var carengine = $('carengine').val()
	var carvalue = $('#carValue').val()
	var carimage1 = $('#imagelink1').val()
	var carimage2 = $('#imagelink2').val()
	var carimage3 = $('#imagelink3').val()


	var obj = createCar(carname,carmodel, carengine, carvalue);
	obj.addimg(carimage1)
	obj.addimg(carimage2)
	obj.addimg(carimage3)
	carsArr.push(obj)
	display(carsArr)
	console.log(obj)
})



var cnt = 0 ;
$('#addcarr').on('click',function(){
cnt++
if(cnt===1){
	$('#addCar').show() 
}
else{$('#addCar').hide()
	cnt = 0 ;
}
})



$('#addCar').hide()
$('#main').hide()
$('#homebtn').on('click',function(){
	$('#main').show()
})


 