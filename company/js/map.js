// JavaScript Document
function initialize() {
	var latlng = new google.maps.LatLng(35.001036169888046, 135.7593246611807);
	var myOptions = {
		zoom: 20,/*拡大比率*/
		center: latlng,/*表示枠内の中心点*/
		mapTypeControlOptions: { mapTypeIds: ['株式会社inorie', google.maps.MapTypeId.ROADMAP] }/*表示タイプの指定*/
	};
	
	var map = new google.maps.Map(document.getElementById('map'), myOptions);
	/*アイコン設定*/
	var icon = new google.maps.MarkerImage('../common/map_icon.png',
	new google.maps.Size(70,72),/*アイコンサイズ設定*/
	new google.maps.Point(0,0),/*アイコン位置設定*/
	);
	
	var markerOptions = {
		position: new google.maps.LatLng(35.001036169888046, 135.7593246611807),
		map: map,
		icon: icon,
		title: '株式会社inorie'
	};
	
	var marker = new google.maps.Marker(markerOptions);
	
	/*=========ここから追加=========*/
    var mapStyle = [ {
		"stylers": [ {
			"saturation": -100
		} ]
	} ];
	
	var mapType = new google.maps.StyledMapType(mapStyle);
	map.mapTypes.set( 'GrayScaleMap', mapType);
	map.setMapTypeId( 'GrayScaleMap' );

	/*=========ここまで追加=========*/
	var styledMapOptions = { name: '株式会社inorie' }
	var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
	map.mapTypes.set('株式会社inorie', sampleType);
	map.setMapTypeId('株式会社inorie');}

	google.maps.event.addDomListener(window, 'load', initialize);
		