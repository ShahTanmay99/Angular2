import {Control, ControlGroup} from 'angular2/common';

export class userValidator{
    static isEmailValid(control: Control){
        var EMAIL_REGEXP =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!EMAIL_REGEXP.test(control.value))
            return {isEmailValid:true}
        return null;
    }
    static noSpace(control: Control){
        if(control.value.indexOf(' ') >= 0)
            return {noSpace: true}
        return null;
    }
    static uniqueName(control: Control){
        return new Promise((resolve,reject) =>{
            setTimeout(function(){
                if(control.value=="tanmay")
                    resolve({ uniqueName:true });
                else
                    resolve(null);
            },1000);
        });
    }
    static confirmPassword(group: ControlGroup){
        var newpwd1 = group.find('newpwd').value;
        var conpwd1 = group.find('confpwd').value;

        if(newpwd1 == "" || conpwd1 == "")
            return null;
        if (newpwd1 != conpwd1) 
            return {confirmPassword : true};
        return null;
    }
}