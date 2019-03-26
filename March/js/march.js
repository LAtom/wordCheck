var app =new Vue({
    //获得该标签的元素
    el :'#app',
    //数据
    data :{
        name : null,
        price :10,
        sex :'female',
        sexSelect :[],
        from : '1',
        destination :[],
        role :'hr',
        foodList : [
            {
              name : '葱',
                price : 10,
                discount : .8
            },
            {
                name : '姜',
                price : 5,
                discount : .5
            },
            {
                name : '蒜',
                price : 4.5,
                discount : null
            }
        ],
        url : 'http://www.baidu.com',
        classT :"default_btn_class"
    },
    //函数方法:
    methods :{
        onClick : function () {
            console.log("clicked");
        },
        onEnter :function () {
            console.log("mouse enter");
        },
        onOut :function () {
            console.log("mouse leave");
        },
        onSubmit :function () {
            console.log("submit finish")
        },
        onEntered:function () {
            console.log("entered finish")
        }
    }

})
