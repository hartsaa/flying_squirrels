var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.750000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Numberofobservations_1 = new ol.format.GeoJSON();
var features_Numberofobservations_1 = format_Numberofobservations_1.readFeatures(json_Numberofobservations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Numberofobservations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Numberofobservations_1.addFeatures(features_Numberofobservations_1);
var lyr_Numberofobservations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Numberofobservations_1, 
                style: style_Numberofobservations_1,
                popuplayertitle: 'Number of observations',
                interactive: true,
    title: 'Number of observations<br />\
    <img src="styles/legend/Numberofobservations_1_0.png" /> 1<br />\
    <img src="styles/legend/Numberofobservations_1_1.png" /> 1 - 5<br />\
    <img src="styles/legend/Numberofobservations_1_2.png" /> 5 - 20<br />\
    <img src="styles/legend/Numberofobservations_1_3.png" /> 20 - 50<br />\
    <img src="styles/legend/Numberofobservations_1_4.png" /> 50 - 100<br />\
    <img src="styles/legend/Numberofobservations_1_5.png" /> 100 - 239<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Numberofobservations_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Numberofobservations_1];
lyr_Numberofobservations_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'fid_count': 'fid_count', 'fid_unique': 'fid_unique', 'year_count': 'year_count', 'year_unique': 'year_unique', 'latest_observation': 'latest_observation', 'number_of_observations': 'number_of_observations', });
lyr_Numberofobservations_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'fid_count': 'TextEdit', 'fid_unique': 'TextEdit', 'year_count': 'TextEdit', 'year_unique': 'TextEdit', 'latest_observation': 'Range', 'number_of_observations': 'Range', });
lyr_Numberofobservations_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'fid_count': 'hidden field', 'fid_unique': 'hidden field', 'year_count': 'hidden field', 'year_unique': 'inline label - always visible', 'latest_observation': 'inline label - always visible', 'number_of_observations': 'inline label - always visible', });
lyr_Numberofobservations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});