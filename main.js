$(document).ready(function(){
    var _url = "https://my-json-server.typicode.com/anwarsyaef/pwaapi/products"
    var dataResults = ''
    var catResults = ''
    var categories = []

    $.get(_url, function(data){
        $.each(data, function(key, items){
            _cat = items.category
            dataResults += "<div>"
                            + "<h3>" + items.name + "</h3>"
                            + "<p>" + _cat + "</p>"
                            "</div>";

            if($.inArray(_cat, categories) == -1){
                categories.push(_cat)
                catResults += "<option value'"+ _cat + "'>" + _cat + "</option>"

            }
        })

        $('#products').html(dataResults)
        // $('#cat_select').html(catResults)
        $('#cat_select').html("<option value='all'>semua</option>" + catResults)
    })

    //Fungsi Filter
    $('#cat_select').on('change', function(){
        updateProduct($(this).val())
    })

    function updateProduct(cat){
        var dataResults = ''
        var _newUrl = _url
        if(cat != 'all')
            _newUrl = _url + "?category=" +cat

        $.get(_newUrl, function(data){

            $.each(data, function(key, items){
                _cat = items.category
                dataResults += "<div>"
                                + "<h3>" + items.name + "</h3>"
                                + "<p>" + _cat + "</p>"
                                "</div>";
    
                
            })
    
            $('#products').html(dataResults)
        })
    
    }

})
