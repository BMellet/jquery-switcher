var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};
 //var esp = $(".button").attr('data-animal');
	// console.log(esp);

function main()
{
	 


	  $(".button").each(function()
		 {
		 	$(this).click(function()
		 	{
				var x = $ (this).attr('data-animal') ;

				console.log(x);

				switch(x) 

		     	{
		    	case 'cat':
		        
		        	$("#holder").html ( '<img src="img/'+ species.cat + '">' );

		        break;

		    	case 'bear':

		    	$("#holder").children().remove();

		        $("#holder").html( '<img src="img/'+ species.bear + '">' );
		        
		        break;

		    	case 'fish':

		    	$("#holder").children().remove();
		    	
		        $("#holder").html ( '<img src="img/'+ species.fish + '">' );
		        break;
				}
			});
		});

	
	     

     function img(i)
     {
     	 
        
	} 
      
	/* 
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire
	*/

	// 1. placez un listener sur le click des éléments <button>
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !
	
	
	 
}

$(document).ready(function(){
	main();
});