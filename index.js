#!/usr/bin/env node

console.log(`
                                                                                                                                                      
                                                                   ...... ............                                                                
                                                      .....                                   ...                                                     
                                                 ,.                                                  .                                                
                                              *.                ,,**//*///**//////****,.               *.                                             
                                             /*       .*(##%%&&&&&&&&&&&&&&&&&&&&&&&&&&&%#%##((/,      .(                                             
                                              %,  /%%&&@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%#/ */                                              
                                              #/,/(&@@@@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&((***/                                              
                                              *###&&#///(%&@@&&&&&&&&&&&&&&&&&&%&&%%%%&&&%%#(/*,(&&&%#(*                                              
                                              .%#(%&&&&@@@@@@&#(/***///(((((///*,,***(%&&&&&&&%&&&%%##(%///,..                                        
                                               %&%#(#&&@@@@&@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%&&%%##%@&%#*...  ..   *&&/.                             
                                               (&&%%%&&%%##((##%&&&&&&&&&&&&&&&&&&&&&&%%%#####%&&&&&&@@,             ,((%#(,                          
                                               .@&%%%&@@@&&&&&&&&&&&&&%%%&%%%%%%%&&&&&&@&&&&&&&&&&&&&&%                  ***(.                        
                                                #&&%%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&&&@&(                   ./*#.                       
                                                *@&%%%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&&&@@*                    ,(,#                       
                                                .@&%%%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&&&@@.                     (.(                       
                                                 #@&%%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&%&@%                     //.,                       
                                                  @&%%%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&@&&(#@,                   ,,*(*                        
                                                  %&%%%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&%(%&                 ,,.,(/.                         
                                                  /@&%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&@&&&&,&(            .,.. *.(*                            
                                                   @@&%%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&&(/((***,..  .,,../(*......                         
                                                   /@&%&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&&&%,    .    ..,*,,,,,.....                         
                                                   .@@&%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&&&# .,*////*******,,,,,......                        
                                                    #@&%%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&&@(////////****,,,,,,,,........                      
                                                     &@&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&@&//////******,,,,,,,...........                     
                                                     *@&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&@//////******,,,,,,...........                       
                                                      /@&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&@@#///////******,,,,,,.....                            
                                                       .&@&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&((((//////*****,,...                                  
                                                          #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#(((((///*,,..                                          
                                                             ./@@@@@@@@@@@@@@@@@@@@@@@@@%#//*,,..                                                     
                                                                       ....,,,,,..                                                                    
                                                                                                                                                      
                                                                                                                                                      

`);





function defaults(a = pa){
	const  dinput  = a;
	return dinput;
}



const  input = defaults(process.argv);

const s_input = function(process){
	
	process.slice(2);
 
	return process.slice(2);
};
const r_input = s_input(input)[Math.floor(Math.random()*s_input(input).length)];

class main {
	constructor(){
	}
	call(...index){
	console.log(index+": "+r_input);

	}
}

const f = new main();
f.call("발표자는 ");

