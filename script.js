function createCar(name,model, engine, value, img){				
	var car = {} ;												
	car.name = name ;
	car.engine = engine ;
	car.value = value ;
	car.img = img ;
	car.model = model ;
	return car ;
}

var blueE30 = createCar('huricane','e30', 'M52','20k$','https://i.pinimg.com/originals/16/e0/69/16e069abedb17e3f40d6755f9fffb2de.jpg')
var rede30 = createCar('Bad blood','e30', 'M20','12k$','https://i.imgur.com/tBPyEBt.jpg')
var Blacke30 = createCar('Night Blood','e30', 'M50 turbo','22k$','http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2016/06/15084308/2016-Players-Classic-Spotlight-BMW-E30-by-Paddy-McGrath-9-1200x800.jpg')
var rede36 = createCar('E36','e30', 'M50','18k$','https://www.auto-forever.com/wp-content/uploads/2017/02/100_E36_3-series_1993-1996_coupe-1030x773.jpg')
var huricane = createCar('invinsible','e30', 'M43','12k$','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXD84p6B9GTmiBSPa-TADWVEBVl3uaI2Wb_vz9rZQQ8yQ_es8&s')
var rain = createCar('stay tuned','e30', 'M50','16k$','https://i.ytimg.com/vi/a9_qppChhTo/maxresdefault.jpg')
var redee36 = createCar('etra spicy','e30', 'M50','31k$','https://seegerdezign.com/wp-content/uploads/2018/03/e36-seeger-bumper-720x321.jpg')
var danha  = createCar('nowa','e30', 'M20','12k$','https://previews.123rf.com/images/evrenkalinbacak/evrenkalinbacak1601/evrenkalinbacak160100459/50394478-istanbul-turquie-31-octobre-2015-ozer-mollamehmetoglu-conduit-bmw-m3-e36-turbo-de-nankang-%C3%A9quipe-de-dr.jpg')
var helloz = createCar('see you','e30', 'M20','12k$','https://i.ytimg.com/vi/rrNIfxh-KwE/maxresdefault.jpg')
var x = createCar('oups','e30', 'M20','12k$','https://www.driftworks.com/forum/attachments/276874/')
var y = createCar('extra love','e30', 'M20','12k$','https://c.wallhere.com/photos/f9/43/car_YASIDDESIGN_render_artwork_BMW_BMW_M3_E46_BMW_E46_race_cars-46145.jpg!d')

var z = createCar('Bad blood','e36', 'M20','12k$','https://23pah8520q22plrod2gvdcur-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/bmw-frozen-grey-e46-m3-modified-aftermarket-forgestar-retro-wheel-e.jpg')
var ze = createCar('ehausted','e36', 'M20','12k$','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOn1OGGRVBhyC8kL0DhQYIyALDQA07bDGhcj6bswxVucMDiTHsyQ&s')
var reezde30 = createCar('next','e36', 'M20','12k$','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVwj2EjRwtSzW9QNN3JcNzb67-MIkcJhDYBn-4Pkz3U0udGXu&s')
var redety30 = createCar('hexa','e36', 'M20','12k$','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ctFICrlmtn69XjXkko-qo3MCSmAhbwf_1Y-CstZHMI6WbKTi&s')
var rede3try0 = createCar('exercise','e36', 'M20','12k$','https://engineswapdepot.com/wp-content/uploads/2019/08/Carbon-Fiber-E46-M3-with-a-S65-V8-01.jpg')
var rede3ui0 = createCar('ex guirlfriend','e36', 'M40','12k$','https://i.imgur.com/tBPyEBt.jphttps://cdn.bimmertoday.de/wp-content/uploads/2015/08/2001-BMW-M3-GTR-Street-E46-V8-Serie-Strassenzulassung-02.jpg')
var r390 = createCar('buzzer','e36', 'M54','12k$','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6i3m9V27z8iFtIQ_CXAVwxsRCG-RMLyqnh4abzhoeD0ZlLtd&s')
var rfge30 = createCar('Bad girl','e39', 'M50','12k$','https://i.pinimg.com/originals/5e/59/70/5e5970225b4e2d6c6b9dfcdcfbf45abe.jpg')
var rprue30 = createCar('night walker','e39', 'M51','12k$','https://cdn.bmwblog.com/wp-content/uploads/2017/04/BMW-E39-M5-By-Vorsteiner-Image-27.jpg')
var reert30 = createCar('winter','e39', 'M57','12k$','https://judsonconcept.com/img/avtomobili/490/bmv-e39-otzivi-vladelcev-tehnicheskie-harakteristiki-zayavlennaya-moshnost-i-rashod-topliva.jpg')
var reduy0 = createCar('black moon','e39', 'M51','12k$','https://i.ytimg.com/vi/b71ZJPL6JPc/maxresdefault.jpg')
var carsArr = [reduy0, reert30, rprue30, rfge30, r390, rede3try0, redety30, reezde30, ze, z, y, x, helloz, danha, redee36, rain, huricane, rede36, Blacke30, rede30, blueE30]


$('#opennav').hover( function(){
	
	$("#navbar").css("display", "block") ; 
	$('#opennav').hide() ;
	console.log('you clicked') ;
})

$('#closenav').on('click', function(){
	
	$("#navbar").css("display", "none") ;
	$('#opennav').show() ; 
	console.log('you clicked close')
})


$('#b1').on('click', function(){
	var strAdded = $('#added').val()
	var optstr = $('<option></option>')
	optstr.text(strAdded)
	optstr.appendTo('#slt')	

})


//display all cars
function display(arr){

	$('#main').html('')	   
   for(var i =0; i < arr.length;i++){					
  var imgdiv = $('<div class ="imagediv"></div>')
	var img = $('<img id=imageid>')
	var ingDiv = $('<div class=uldiv><div>') ;
	

    img.attr('src', arr[i].img)
    imgdiv.append(img)
   $('#main').append(imgdiv)
}
}

display(carsArr)






$('body').on('click','.imagediv', function() {																							 
	console.log($(this.html))
	$('#showelement').show()

	$('#showelement').find('img').remove()
	$(this).find('img').appendTo('#showelement')
	// $($(this).html()).appendTo('#showelement')
	
})

$('.close').on('click', function() { 
  $('#showelement').hide()
} )


//search function
function search(arr, key){	
var result = undefined ;															
	result = arr.filter(function(element){		
	return element.model === key ;
	})
	return result;
}

console.log('hi')



$('body').on('click','.sidebuttons', function(){
	var key = this.id.split('') ;
	key.splice(3,1)
	var realkey = key.join('')
	console.log(realkey)

	var result = search(carsArr,realkey)
	
	console.log('it worked')
	console.log(result)
	display(result)	
})

$('body').on('click','#allcars', function(){
	display(carsArr)
})





$('#submitaddcar').on('click',function(){
	var carname = $('#carName').val()
console.log(carname)
})



