'use strict';
//console.log('Loading event');

exports.handler = function (event, context) {


    var thedata = [
        { "License_ID": "SM-J1-9999", "License_Number": "9999", "License_Type": "SM-J1", "License_Type_Name": "Sheet Metal Workers - Journeyperson/unrestricted", "Licensing_Board": "SM", "License_Entity": "Sheet Metal Workers", "Licensee_Name": "David A Clemente", "Street_Address": "15 APACHE WAY ", "City": "WILMINGTON", "State": "MA", "Zipcode": "01887", "Status": "Current", "License_Issued_Date": "04/12/2011", "License_Expiration_Date": "11/28/2016" }, { "License_ID": "PL-M-9998", "License_Number": "9998", "License_Type": "PL-M", "License_Type_Name": "Master Plumber -M", "Licensing_Board": "PL", "License_Entity": "Plumbers", "Licensee_Name": "Arthur J St Pierre", "Street_Address": " PO BOX 2605 ", "City": "ATTLEBORO FLS", "State": "MA", "Zipcode": "02763", "Status": "Current", "License_Issued_Date": "07/10/1984", "License_Expiration_Date": "05/01/2018" }, { "License_ID": "SM-J1-9998", "License_Number": "9998", "License_Type": "SM-J1", "License_Type_Name": "Sheet Metal Workers - Journeyperson/unrestricted", "Licensing_Board": "SM", "License_Entity": "Sheet Metal Workers", "Licensee_Name": "John E Mucci", "Street_Address": "60 Heath St ", "City": "Somerville", "State": "MA", "Zipcode": "02145", "Status": "Current", "License_Issued_Date": "04/12/2011", "License_Expiration_Date": "11/28/2016" }, { "License_ID": "EL-A-9997", "License_Number": "9997", "License_Type": "EL-A", "License_Type_Name": "Master Electrician - A", "Licensing_Board": "EL", "License_Entity": "Electricians", "Licensee_Name": "William F Melanson Jr", "Street_Address": "96 GREEN ST ", "City": "CANTON", "State": "MA", "Zipcode": "02021", "Status": "Current", "License_Issued_Date": "01/01/1900", "License_Expiration_Date": "07/31/2016" }, { "License_ID": "SM-J1-9997", "License_Number": "9997", "License_Type": "SM-J1", "License_Type_Name": "Sheet Metal Workers - Journeyperson/unrestricted", "Licensing_Board": "SM", "License_Entity": "Sheet Metal Workers", "Licensee_Name": "Richard P Pratt", "Street_Address": "16 HOLDEN STREET ", "City": "LOWELL", "State": "MA", "Zipcode": "01851", "Status": "Current", "License_Issued_Date": "04/12/2011", "License_Expiration_Date": "12/28/2016" }, { "License_ID": "PL-M-9996", "License_Number": "9996", "License_Type": "PL-M", "License_Type_Name": "Master Plumber -M", "Licensing_Board": "PL", "License_Entity": "Plumbers", "Licensee_Name": "Ivar R Moore", "Street_Address": " PO BOX 478 ", "City": "CENTERVILLE", "State": "MA", "Zipcode": "02632", "Status": "Current", "License_Issued_Date": "07/10/1984", "License_Expiration_Date": "05/01/2018" }, { "License_ID": "SM-M1-9995", "License_Number": "9995", "License_Type": "SM-M1", "License_Type_Name": "Sheet Metal Workers - Master/unrestricted", "Licensing_Board": "SM", "License_Entity": "Sheet Metal Workers", "Licensee_Name": "Aaron B Tripp", "Street_Address": "56 Shady Ln ", "City": "E Falmouth", "State": "MA", "Zipcode": "02536", "Status": "Current", "License_Issued_Date": "04/12/2011", "License_Expiration_Date": "05/28/2016" }, { "License_ID": "PL-M-9994", "License_Number": "9994", "License_Type": "PL-M", "License_Type_Name": "Master Plumber -M", "Licensing_Board": "PL", "License_Entity": "Plumbers", "Licensee_Name": "David J Field", "Street_Address": " PO BOX 605 ", "City": "E HAMPSTEAD", "State": "NH", "Zipcode": "03826", "Status": "Current", "License_Issued_Date": "07/10/1984", "License_Expiration_Date": "05/01/2018" }, { "License_ID": "PL-M-9993", "License_Number": "9993", "License_Type": "PL-M", "License_Type_Name": "Master Plumber -M", "Licensing_Board": "PL", "License_Entity": "Plumbers", "Licensee_Name": "Russell J Dixon Jr", "Street_Address": "21 DAVIS RD ", "City": "CHELMSFORD", "State": "MA", "Zipcode": "01824", "Status": "Current", "License_Issued_Date": "07/10/1984", "License_Expiration_Date": "05/01/2018" }, { "License_ID": "SM-M1-9993", "License_Number": "9993", "License_Type": "SM-M1", "License_Type_Name": "Sheet Metal Workers - Master/unrestricted", "Licensing_Board": "SM", "License_Entity": "Sheet Metal Workers", "Licensee_Name": "Paul J Perry", "Street_Address": "11 1/2 ALDEN ST ", "City": "PLYMOUTH", "State": "MA", "Zipcode": "02360", "Status": "Current", "License_Issued_Date": "04/12/2011", "License_Expiration_Date": "10/28/2016" }, { "License_ID": "SM-M1-9992", "License_Number": "9992", "License_Type": "SM-M1", "License_Type_Name": "Sheet Metal Workers - Master/unrestricted", "Licensing_Board": "SM", "License_Entity": "Sheet Metal Workers", "Licensee_Name": "Edward J Sweeney Jr", "Street_Address": " PO BOX 1404 ", "City": "MATTAPOISETT", "State": "MA", "Zipcode": "02739", "Status": "Current", "License_Issued_Date": "04/12/2011", "License_Expiration_Date": "04/28/2018" }, { "License_ID": "PL-M-9991", "License_Number": "9991", "License_Type": "PL-M", "License_Type_Name": "Master Plumber -M", "Licensing_Board": "PL", "License_Entity": "Plumbers", "Licensee_Name": "James O Ahern", "Street_Address": "348 MAIN ST ", "City": "NORWELL", "State": "MA", "Zipcode": "02061", "Status": "Current", "License_Issued_Date": "07/10/1984", "License_Expiration_Date": "05/01/2018" }, { "License_ID": "EL-A-9990", "License_Number": "9990", "License_Type": "EL-A", "License_Type_Name": "Master Electrician - A", "Licensing_Board": "EL", "License_Entity": "Electricians", "Licensee_Name": "Raymond J Obin", "Street_Address": "430 AMORY ST ", "City": "JAMAICA PLAIN", "State": "MA", "Zipcode": "02130", "Status": "Current", "License_Issued_Date": "01/01/1900", "License_Expiration_Date": "07/31/2016" }, { "License_ID": "EL-MR-999", "License_Number": "999", "License_Type": "EL-MR", "License_Type_Name": "Electrician - Master MR", "Licensing_Board": "EL", "License_Entity": "Electricians", "Licensee_Name": "Paul M Berthiaume", "Street_Address": "152 N BROOKFIELD RD ", "City": "E BROOKFIELD", "State": "MA", "Zipcode": "01515", "Status": "Current", "License_Issued_Date": "06/26/2006", "License_Expiration_Date": "07/31/2016" }, { "License_ID": "GF-LP-999", "License_Number": "999", "License_Type": "GF-LP", "License_Type_Name": "Gasfitting - Undiluted Liquefied Petroleum Gas In", "Licensing_Board": "GF", "License_Entity": "Plumbers & Gasfitters", "Licensee_Name": "Michael J Medeiros", "Street_Address": " PO BOX 69 ", "City": "NORTH TRURO", "State": "MA", "Zipcode": "02652", "Status": "Current", "License_Issued_Date": "09/24/1993", "License_Expiration_Date": "05/01/2018" }, { "License_ID": "PL-C-999", "License_Number": "999", "License_Type": "PL-C", "License_Type_Name": "Plumbing Business -C", "Licensing_Board": "PL", "License_Entity": "Plumbers", "Business_Name": "Michael J Hurley Inc M 8744", "Licensee_Name": "Michael J Hurley", "Street_Address": "8 EVERGREEN ROAD ", "City": "NATICK", "State": "MA", "Zipcode": "01760", "Status": "Current", "License_Issued_Date": "05/15/1978", "License_Expiration_Date": "05/01/2018" }, { "License_ID": "SM-M1-999", "License_Number": "999", "License_Type": "SM-M1", "License_Type_Name": "Sheet Metal Workers - Master/unrestricted", "Licensing_Board": "SM", "License_Entity": "Sheet Metal Workers", "Licensee_Name": "Richard M Clemence", "Street_Address": "135 Lebanon Hill Rd ", "City": "Southbridge", "State": "MA", "Zipcode": "01550", "Status": "Current", "License_Issued_Date": "05/17/2010", "License_Expiration_Date": "04/28/2018" }, { "License_ID": "PL-M-9989", "License_Number": "9989", "License_Type": "PL-M", "License_Type_Name": "Master Plumber -M", "Licensing_Board": "PL", "License_Entity": "Plumbers", "Licensee_Name": "John R Nichols", "Street_Address": "7 SUMMER STREET CT ", "City": "NAHANT", "State": "MA", "Zipcode": "01908", "Status": "Current", "License_Issued_Date": "07/09/1984", "License_Expiration_Date": "05/01/2018" }, { "License_ID": "SM-M1-9989", "License_Number": "9989", "License_Type": "SM-M1", "License_Type_Name": "Sheet Metal Workers - Master/unrestricted", "Licensing_Board": "SM", "License_Entity": "Sheet Metal Workers", "Licensee_Name": "Michael E Boumitri", "Street_Address": "75 Pearl St ", "City": "Brockton", "State": "MA", "Zipcode": "02301", "Status": "Current", "License_Issued_Date": "04/12/2011", "License_Expiration_Date": "12/28/2016" }, { "License_ID": "PL-M-9988", "License_Number": "9988", "License_Type": "PL-M", "License_Type_Name": "Master Plumber -M", "Licensing_Board": "PL", "License_Entity": "Plumbers", "Licensee_Name": "Paul Naso", "Street_Address": "126 DAMON RD ", "City": "MEDFORD", "State": "MA", "Zipcode": "02155", "Status": "Current", "License_Issued_Date": "07/09/1984", "License_Expiration_Date": "05/01/2018" }, { "License_ID": "SM-M1-9988", "License_Number": "9988", "License_Type": "SM-M1", "License_Type_Name": "Sheet Metal Workers - Master/unrestricted", "Licensing_Board": "SM", "License_Entity": "Sheet Metal Workers", "Licensee_Name": "Thomas A Leary", "Street_Address": "24 CEDAR ST ", "City": "HALIFAX", "State": "MA", "Zipcode": "02338", "Status": "Current", "License_Issued_Date": "04/12/2011", "License_Expiration_Date": "03/28/2017" }, { "License_ID": "PL-M-9987", "License_Number": "9987", "License_Type": "PL-M", "License_Type_Name": "Master Plumber -M", "Licensing_Board": "PL", "License_Entity": "Plumbers", "Licensee_Name": "George A Morse", "Street_Address": "5 BRIDGE VIEW LN ", "City": "BUZZARDS BAY", "State": "MA", "Zipcode": "02532", "Status": "Current", "License_Issued_Date": "07/09/1984", "License_Expiration_Date": "05/01/2018" }, { "License_ID": "SM-M1-9987", "License_Number": "9987", "License_Type": "SM-M1", "License_Type_Name": "Sheet Metal Workers - Master/unrestricted", "Licensing_Board": "SM", "License_Entity": "Sheet Metal Workers", "Licensee_Name": "Paul J Hannon", "Street_Address": "25 Rondeau Rd ", "City": "Bellingham", "State": "MA", "Zipcode": "02019", "Status": "Current", "License_Issued_Date": "04/12/2011", "License_Expiration_Date": "06/28/2016" }, { "License_ID": "PL-M-9986", "License_Number": "9986", "License_Type": "PL-M", "License_Type_Name": "Master Plumber -M", "Licensing_Board": "PL", "License_Entity": "Plumbers", "Licensee_Name": "Richard W Morahan", "Street_Address": "42 HAMILTON AVE ", "City": "NORTH QUINCY", "State": "MA", "Zipcode": "02171", "Status": "Current", "License_Issued_Date": "07/09/1984", "License_Expiration_Date": "05/01/2018" }, { "License_ID": "SM-J1-9986", "License_Number": "9986", "License_Type": "SM-J1", "License_Type_Name": "Sheet Metal Workers - Journeyperson/unrestricted", "Licensing_Board": "SM", "License_Entity": "Sheet Metal Workers", "Licensee_Name": "Jakim R Brown", "Street_Address": "27 CLARKWOOD ST ", "City": "MATTAPAN", "State": "MA", "Zipcode": "02126", "Status": "Current", "License_Issued_Date": "04/12/2011", "License_Expiration_Date": "07/28/2016" }, { "License_ID": "SM-M1-9985", "License_Number": "9985", "License_Type": "SM-M1", "License_Type_Name": "Sheet Metal Workers - Master/unrestricted", "Licensing_Board": "SM", "License_Entity": "Sheet Metal Workers", "Licensee_Name": "Robert M Flowers", "Street_Address": "38 CURTIS DR ", "City": "PLYMOUTH", "State": "MA", "Zipcode": "02360", "Status": "Current", "License_Issued_Date": "04/12/2011", "License_Expiration_Date": "03/28/2017" }, { "License_ID": "PL-M-9985", "License_Number": "9985", "License_Type": "PL-M", "License_Type_Name": "Master Plumber -M", "Licensing_Board": "PL", "License_Entity": "Plumbers", "Licensee_Name": "Luke G Malbon", "Street_Address": "50 SPOFFORD RD ", "City": "BOXFORD", "State": "MA", "Zipcode": "01921", "Status": "Current", "License_Issued_Date": "07/09/1984", "License_Expiration_Date": "05/01/2018" }, { "License_ID": "PL-M-9984", "License_Number": "9984", "License_Type": "PL-M", "License_Type_Name": "Master Plumber -M", "Licensing_Board": "PL", "License_Entity": "Plumbers", "Licensee_Name": "Alan D Mac Alpine", "Street_Address": "16 LYNDON LN ", "City": "ASHLAND", "State": "MA", "Zipcode": "01721", "Status": "Current", "License_Issued_Date": "07/09/1984", "License_Expiration_Date": "05/01/2018" }, { "License_ID": "PL-M-9983", "License_Number": "9983", "License_Type": "PL-M", "License_Type_Name": "Master Plumber -M", "Licensing_Board": "PL", "License_Entity": "Plumbers", "Licensee_Name": "George R Larose", "Street_Address": "44 ODILE ST ", "City": "METHUEN", "State": "MA", "Zipcode": "01844", "Status": "Current", "License_Issued_Date": "07/09/1984", "License_Expiration_Date": "05/01/2018" }, { "License_ID": "SM-J1-9983", "License_Number": "9983", "License_Type": "SM-J1", "License_Type_Name": "Sheet Metal Workers - Journeyperson/unrestricted", "Licensing_Board": "SM", "License_Entity": "Sheet Metal Workers", "Licensee_Name": "Leo E Cusson", "Street_Address": "249 Hathaway Rd ", "City": "Acushnet", "State": "MA", "Zipcode": "02743", "Status": "Current", "License_Issued_Date": "04/12/2011", "License_Expiration_Date": "02/28/2017" }
    ];


    var licensee = (event.licensee === undefined ? 'No-Licensee' : event.licensee);
    var type = (event.type === undefined ? 'No-Type' : event.type);
    var status = (event.status === undefined ? 'No-Status' : event.status);
    var zipcode = (event.zipcode === undefined ? 'No-Zipcode' : event.zipcode);

    var licList = [];
    var licListType = [];
    var licListStatus = [];
    var licListZipcode = [];


    //if no input paras
    if (licensee === '' && type === '' && status === '' && zipcode === '') {
        console.log('Return all from mock');  //remove with large dataset
        licList = thedata;
        return context.done(null, licList);
    }


    //if licensee (and type and status and zipcode) specified
    if (licensee !== '') {

        //filters Licensee       
        thedata.forEach(function (obj) {

            if (obj.Licensee_Name.search(new RegExp(licensee, "i")) > -1) {
                licList.push(obj);
            }

        });//End Iteration


        //filters type
        if (licList.length > 0 && type !== '') {

            licList.forEach(function (obj) {

                if (obj.License_Type === type) {
                    licListType.push(obj);
                }

            });//End Iteration  

            licList = licListType;

        }//End  filter type


        //filters status
        if (licList.length > 0 && status !== '') {

            licList.forEach(function (obj) {

                if (obj.Status === status) {
                    licListStatus.push(obj);
                }

            });//End Iteration  

            licList = licListStatus;

        }//End  filter status
        
        
        //filters zipcode
        if (licList.length > 0 && zipcode !== '') {

            licList.forEach(function (obj) {

                if (obj.Zipcode === zipcode) {
                    licListZipcode.push(obj);
                }

            });//End Iteration  

            licList = licListZipcode;

        }//End  filter zipcode

        return context.done(null, licList);

    }// end if licensee specified 


    // if type (and status and zipcode) specified
    if (type !== '') {

        //filters Licensee       
        thedata.forEach(function (obj) {
            if (obj.License_Type === type) {
                licList.push(obj);
            }
        });//End Iteration


        //filters status
        if (licList.length > 0 && status !== '') {

            licList.forEach(function (obj) {

                if (obj.Status === status) {
                    licListStatus.push(obj);
                }

            });//End Iteration  

            licList = licListStatus;

        }//End  filter status
        
        
        //filters zipcode
        if (licList.length > 0 && zipcode !== '') {

            licList.forEach(function (obj) {

                if (obj.Zipcode === zipcode) {
                    licListZipcode.push(obj);
                }

            });//End Iteration  

            licList = licListZipcode;

        }//End  filter zipcode

        return context.done(null, licList);

    }//end if type specified 


    // if status (and zipcode) specified
    if (status !== '') {

        //filters Licensee       
        thedata.forEach(function (obj) {
            if (obj.Status === status) {
                licList.push(obj);
            }
        });//End Iteration
        
        
        //filters zipcode
        if (licList.length > 0 && zipcode !== '') {

            licList.forEach(function (obj) {

                if (obj.Zipcode === zipcode) {
                    licListZipcode.push(obj);
                }

            });//End Iteration  

            licList = licListZipcode;

        }//End  filter zipcode

        return context.done(null, licList);

    }//end if status specified 
    
    
    // if zipcode (only) specified
    if (zipcode !== '') {

        //filters Licensee       
        thedata.forEach(function (obj) {
            if (obj.Zipcode === zipcode) {
                licList.push(obj);
            }
        });//End Iteration

        return context.done(null, licList);

    }//end if zipcode specified


};//End exports.handler