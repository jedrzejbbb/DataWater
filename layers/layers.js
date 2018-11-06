var wms_layers = [];

        var lyr_OpenStreetMapStandard_0 = new ol.layer.Tile({
            'title': 'OpenStreetMapStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Analyse_1_1 = new ol.format.GeoJSON();
var features_Analyse_1_1 = format_Analyse_1_1.readFeatures(json_Analyse_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Analyse_1_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Analyse_1_1.addFeatures(features_Analyse_1_1);var lyr_Analyse_1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Analyse_1_1, 
                style: style_Analyse_1_1,
                title: '<img src="styles/legend/Analyse_1_1.png" /> Analyse_1'
            });

lyr_OpenStreetMapStandard_0.setVisible(true);lyr_Analyse_1_1.setVisible(true);
var layersList = [lyr_OpenStreetMapStandard_0,lyr_Analyse_1_1];
lyr_Analyse_1_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'BWS_cat': 'BWS_cat', 'PORT_NAME': 'PORT_NAME', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_Analyse_1_1.set('fieldImages', {'COUNTRY': '', 'BWS_cat': '', 'PORT_NAME': '', 'LATITUDE': '', 'LONGITUDE': '', });
lyr_Analyse_1_1.set('fieldLabels', {'COUNTRY': 'inline label', 'BWS_cat': 'inline label', 'PORT_NAME': 'inline label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', });
lyr_Analyse_1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});