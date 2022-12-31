const user = {
    name:'小米',
    age:18,
    wife:{
        name:'小樱',
    }
}
//把目标对象变成代理对象
//参数1.user===》targe目标对象
//参数2.handler===》处理器对象，用来监视数据，以及数据的操作
const proxy = new Proxy(user,{
    //通过代理对象获取目标对象的值
    get(target,prop){
        console.log('get方法调用了',target,prop);
        //反射
        return Reflect.get(target,prop)
    },
    //通过代理对象更改目标对象的值
    //set对象不仅能够修改还能为目标对象添加值
    set(target,prop,value){
        console.log('user被修改了');
        return Reflect.set(target,prop,value)
    },
    deleteProperty(target,prop){
        console.log('删除对象调用了');
        return Reflect.deleteProperty(target,prop)
    }
})


console.log(proxy.name);
proxy.name='xiaoshuai'
console.log(proxy);
delete proxy.name
console.log(proxy);
console.log(user);