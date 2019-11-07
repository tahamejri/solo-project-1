

$('#opennav').on('click', function(){
	
	$("#navbar").css("display", "") ; 
	console.log('you clicked')
})

$('#closenav').on('click', function(){
	
	$("#navbar").css("display", "none") ; 
	console.log('you clicked close')
})











function createCar(name, engine, value, img){				
	var car = {} ;												
	car.name = name ;
	car.engine = engine ;
	car.value = value ;
	car.img = img ;
	return car ;
}

var blueE30 = createCar('huricane','M52','20k$','https://i.pinimg.com/originals/16/e0/69/16e069abedb17e3f40d6755f9fffb2de.jpg')
var rede30 = createCar('Bad blood','M20','12k$','https://i.imgur.com/tBPyEBt.jpg')
var Blacke30 = createCar('Night Blood','M50 turbo','22k$','http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2016/06/15084308/2016-Players-Classic-Spotlight-BMW-E30-by-Paddy-McGrath-9-1200x800.jpg')
var rede36 = createCar('E36','M50','18k$','https://www.auto-forever.com/wp-content/uploads/2017/02/100_E36_3-series_1993-1996_coupe-1030x773.jpg')
var huricane = createCar('invinsible','M43','12k$','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXD84p6B9GTmiBSPa-TADWVEBVl3uaI2Wb_vz9rZQQ8yQ_es8&s')
var rain = createCar('stay tuned','M50','16k$','https://i.ytimg.com/vi/a9_qppChhTo/maxresdefault.jpg')
var redee36 = createCar('etra spicy','M50','31k$','https://seegerdezign.com/wp-content/uploads/2018/03/e36-seeger-bumper-720x321.jpg')
var danha  = createCar('nowa','M20','12k$','https://previews.123rf.com/images/evrenkalinbacak/evrenkalinbacak1601/evrenkalinbacak160100459/50394478-istanbul-turquie-31-octobre-2015-ozer-mollamehmetoglu-conduit-bmw-m3-e36-turbo-de-nankang-%C3%A9quipe-de-dr.jpg')
var helloz = createCar('see you','M20','12k$','https://i.ytimg.com/vi/rrNIfxh-KwE/maxresdefault.jpg')
var x = createCar('oups','M20','12k$','https://www.driftworks.com/forum/attachments/276874/')
var y = createCar('extra love','M20','12k$','https://c.wallhere.com/photos/f9/43/car_YASIDDESIGN_render_artwork_BMW_BMW_M3_E46_BMW_E46_race_cars-46145.jpg!d')

var z = createCar('Bad blood','M20','12k$','https://23pah8520q22plrod2gvdcur-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/bmw-frozen-grey-e46-m3-modified-aftermarket-forgestar-retro-wheel-e.jpg')
var ze = createCar('ehausted','M20','12k$','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOn1OGGRVBhyC8kL0DhQYIyALDQA07bDGhcj6bswxVucMDiTHsyQ&s')
var reezde30 = createCar('next','M20','12k$','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVwj2EjRwtSzW9QNN3JcNzb67-MIkcJhDYBn-4Pkz3U0udGXu&s')
var redety30 = createCar('hexa','M20','12k$','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ctFICrlmtn69XjXkko-qo3MCSmAhbwf_1Y-CstZHMI6WbKTi&s')
var rede3try0 = createCar('exercise','M20','12k$','https://engineswapdepot.com/wp-content/uploads/2019/08/Carbon-Fiber-E46-M3-with-a-S65-V8-01.jpg')
var rede3ui0 = createCar('ex guirlfriend','M40','12k$','https://i.imgur.com/tBPyEBt.jphttps://cdn.bimmertoday.de/wp-content/uploads/2015/08/2001-BMW-M3-GTR-Street-E46-V8-Serie-Strassenzulassung-02.jpg')
var r390 = createCar('buzzer','M54','12k$','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6i3m9V27z8iFtIQ_CXAVwxsRCG-RMLyqnh4abzhoeD0ZlLtd&s')
var rfge30 = createCar('Bad girl','M50','12k$','https://i.pinimg.com/originals/5e/59/70/5e5970225b4e2d6c6b9dfcdcfbf45abe.jpg')
var rprue30 = createCar('night walker','M51','12k$','https://cdn.bmwblog.com/wp-content/uploads/2017/04/BMW-E39-M5-By-Vorsteiner-Image-27.jpg')
var reert30 = createCar('winter','M57','12k$','https://judsonconcept.com/img/avtomobili/490/bmv-e39-otzivi-vladelcev-tehnicheskie-harakteristiki-zayavlennaya-moshnost-i-rashod-topliva.jpg')
var reduy0 = createCar('black moon','M51','12k$','https://i.ytimg.com/vi/b71ZJPL6JPc/maxresdefault.jpg')


var carsArr = [reduy0, reert30, rprue30, rfge30, r390, rede3ui0, rede3try0, redety30, reezde30, ze, z, y, x, helloz, danha, redee36, rain, huricane, rede36, Blacke30, rede30, blueE30]

//add new ingredient

$('#b1').on('click', function(){
	var strAdded = $('#added').val()
	var optstr = $('<option></option>')
	optstr.text(strAdded)
	optstr.appendTo('#slt')	

})


//display all meals
function affichage(arr){

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

affichage(carsArr)

// //add to the option list

// // $('#b1').on('click', function(){
// // 	var strAdded = $('#added').val()
// // 	var optstr = $('<option></option>')
// // 	optstr.text(strAdded)
// // 	optstr.appendTo('#slt')	
// // })

// //variable containing the result of the search

// var result = [];


// function search(arr, key){																
// 	result = arr.filter(function(element){		
// 	return !element.ingredients.hasOwnProperty(key)
// 	})
// 	return result;
// }

// var resultOfSearch ;

// $('#search').on('click', function(){																	
																												
// var selectedStr = $( "#slt option:selected" ).text();		
// 	resultOfSearch = undefined;
//    resultOfSearch = search(meals, selectedStr)	
   
//    affichage(resultOfSearch)				
 
																																		
//  })


// function lookForObject(obj){
// 	photoHtml = obj.innerHTML ;	
//   																																								//this variable takes the html text  
//   var arrayof= photoHtml.split('')																								//now we extract the image source from that selection  
//   var newArr = arrayof.slice(arrayof.indexOf('h'),arrayof.length -2).join('') ;		 
// 																																									//this object will represents the source obj of the image we clicked on
// for(var i =0; i<meals.length; i++){																								//we loop the meals array and we look for the object that contains the image we clicked on
// 	if(meals[i].img === newArr){
// 		objResult = meals[i]																													//whenever we find that object we put it in the variable
// 	}
// }
// }




// $('body').on('click','.imagediv', function() {
																								 
// 	console.log($(this.html))
// 	$('#showelement').show()
// 	$(this).find('.uldiv').show()
// 	$('#main').html('')
// 	$('#showelement').html('')
// 	$($(this).html()).appendTo('#showelement')
	
// })


// $('.uldiv').hide()
// $('#showelement').hide()

// $('body').on('click','#showelement',function(){
// 	affichage(meals)
// 	$('#showelement').hide()
// })
