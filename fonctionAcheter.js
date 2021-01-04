
const boutonAcheter = document.getElementById("boutonAcheter");
const panier=document.getElementById("panier");

boutonAcheter.addEventListener("click",Acheter); 

function AjouterPanier(nomProd,sourceimage,couleurchoisie,taillechoisie,prixProdU) {

      const row = document.createElement("tr");
      const ProdCell = document.createElement("td");
      const quantityCell = document.createElement("td");
      const subprice = document.createElement("td");
      row.className="ligneProduit";
      subprice.className="soustotal";
      
      // pour la case ProdCell
      const image=document.createElement("img");
      image.src=sourceimage;
      image.alt=nomProd;
      image.width="10%";
      const div = document.createElement("div");
      div.innerText="Taille : "+ taillechoisie+"couleur : " + couleurchoisie;
      
      // pour la case de quantité
      const q= document.createElement("input");
      q.className="quantity";
      q.type="number";
      q.value="1";
      q.min="1";
      quantityCell.appendChild(q);
      
      const removeButton=document.createElement("button");
      removeButton.className="bonton boutonblanc";
      removeButton.id="removeBouton";
      removeButton.onclick="remove()";
      removeButton.type="button";
      removeButton.innerText="Remove";
      quantityCell.appendChild(removeButton);
      
      //pour la case subprice
      subprice.innerText= prixProdU;
      
      row.appendChild(ProdCell);
      row.appendChild(quantityCell);
      row.appendChild(subpriceCell);
      panier.appendChild(row);
      alert("le produit a ete ajouté");
}


function Acheter(event){
      alert("le produit va etre ajouté");
      const section = event.target.parentElement.parentElement;
      const enfants=section.childNodes[2];
      const couleurchoisie=section.getElementById("couleurP").selectedIndex.innerText;
      const taillechoisie= section.getElementById("tailleP").selectedIndex.innerText;
      const prixProdU=section.getElementById("PrixP").selectedIdex.innerText;
      const sourceimage= enfants.src;
      const nomProd = section.firstChild.innertText;
      AjouterPanier(nomProd,sourceimage,couleurchoisie,taillechoisie,prixProdU);
}
