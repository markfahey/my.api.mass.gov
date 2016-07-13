'use strict';

            
exports.handler = function(event, context) {
    
    
  var thedata= [
         {'Value':'Current', 'Agency':'DPL', 'Agency_Name': 'Division of Professional Licensure'} ,    
         {'Value': 'Revoked', 'Agency':'DPL', 'Agency_Name': 'Division of Professional Licensure'}, 
         {'Value': 'Expired', 'Agency':'DPL', 'Agency_Name': 'Division of Professional Licensure'},    
         {'Value': 'Deceased', 'Agency':'DPL', 'Agency_Name': 'Division of Professional Licensure'},   
         {'Value': 'Suspended', 'Agency':'DPL', 'Agency_Name': 'Division of Professional Licensure'}, 
         {'Value': 'Surrendered by Discipline', 'Agency':'DPL', 'Agency_Name': 'Division of Professional Licensure'},
         {'Value':'Active', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'},
         {'Value':'Null and Void', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'},
         {'Value':'Expired', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'},
         {'Value':'Pending', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'},
         {'Value':'Inactive', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'},
         {'Value':'Exam Failed', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'},
         {'Value':'Expired - Not Renewable', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'},
         {'Value':'Do Not Renew', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'},
         {'Value':'Renewal - Incomplete', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'},
         {'Value':'Revoked', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'},
         {'Value':'Suspended', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'},
         {'Value':'Retired', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'},
         {'Value':'Reinstatement Pending', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'},
         {'Value':'Exam Passed', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'},
         {'Value':'Decommission', 'Agency':'EOPSS', 'Agency_Name': 'Executive Office of Public Safety and Security'}
    ];

  var agency = (event.Agency === undefined ? 'No-Agency' : event.Agency);
  var statusList = []; 
  var i;
  
  
  //for all status classifications
  if  (agency === ''){
      console.log('Return all from mock');  
      statusList=thedata;
      return context.done(null,statusList);
  }
  
  
  
  //for specified agency
  if  (agency !== ''){
 
      i=0;
      thedata.forEach(function(obj){
        if (obj.Agency === agency) {
              console.log(i + "-"+ obj.Agency);
              i=i+1;
              statusList.push(obj);
        }
      });//End Iteration
      return context.done(null,statusList);
  
   }//End if agency specified
   
    
};//End exports.handler