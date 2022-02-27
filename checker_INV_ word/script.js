let inp = document.querySelector('input');
let tArea = document.querySelector('textarea');

inp.addEventListener('click',validate_text);
tArea.addEventListener('click',select_area);

let bWords_arr=new Array("cream","war","burger");

let bWord_arr=new Array;
let bWord_alert_count=0;


function reset_alert_count(){
   
    bWord_alert_count=0;
   
};



function validate_text(){

    reset_alert_count();

        let compare_text=document.form1.text.value;

        for(let i=0; i<bWords_arr.length; i++){
        
             for(let j=0; j<(compare_text.length); j++){
        
                 if(bWords_arr[i]==compare_text.substring(j,(j + bWords_arr[i].length)).toLowerCase()){
                    bWord_arr[bWord_alert_count] = compare_text.substring(j,(j + bWords_arr[i].length));
                    bWord_alert_count++;
                }
            }
         }
        let alert_text="";

        for(let k=1; k<=bWord_alert_count; k++){
            alert_text+="\n" + "(" + k + ")  " + bWord_arr[k-1];
        }
            if(bWord_alert_count>0){
            alert("We type invalid word!!!" + alert_text.toUpperCase()+ " is catched! "+' count of bad words is`'+bWord_alert_count);
            document.form1.text.select();
            }
            else{
            document.form1.submit();
            }
}


function select_area(){
   document.form1.text.select();
};


window.onload=reset_alert_count;