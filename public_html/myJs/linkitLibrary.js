/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('LinkedInLibrary',[])
        .factory('$linkedln',['$http','$rootScope','$log',function($http,$rootScope,$log){
            
            var accessToken; 
            var expiry;
            return{
              setAccessToken : function(Token){ accessToken=Token;  } ,
              getAccessToken : function(){ return accessToken;  }
            };
        }])
;


