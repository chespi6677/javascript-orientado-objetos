class NewStudents{
    
    constructor(name,lastname,degree,group,subject){
     this.name=name;
     this.lastname=lastname;
     this.degree=degree;
     this.group=group;
     this.subject=subject;
    }
        
}

class UI {
    AddStudent(Students){
    const ListStudent=document.getElementById('list-students');
    const listelement=document.createElement('tr');
    listelement.innerHTML=`    
    
    <td scope="row">${Students.name}</td>
      <td>${Students.lastname}</td>
      <td>${Students.degree}</td>
      <td>${Students.group}</td>
      <td>${Students.subject}</td>
      <td><a class="btn btn-danger" onclick="DeleteStudent(this)"><i class="far fa-trash-alt"></i></a></td>
      
      `;
    //El método appendChild () agrega un nodo como el último hijo de un nodo
    ListStudent.appendChild(listelement);
    //llamamos a nuestro metodo para limpiar el formulario
    this.ResetForm();
    }
    ResetForm(){
        //vaciamos los input del formulario
        document.getElementById('form-add').reset();
    }
    ShowMessages(message,ClassCss){
    //creamos la etiqueta div
     const div = document.createElement('div');
     /*aqui creamos la clase alert alert-{mandamos el nombre de la clase con el 
    respectivo mensaje}*/
     div.className=`alert alert-${ClassCss} mt-4`;
     //Document.createTextNode()
     //Crea un nuevo nodo de texto
     div.appendChild(document.createTextNode(message));
     //seleccionamos el contenedor dentro del section
     const cont= document.querySelector('.container');
     //seleccionamos el id=(app)
     const app= document.querySelector('#app');
     /*
     *insertamos un nodo hijo antes del nodo padre.
     *insertamos div antes del div id=(app).
     */
     cont.insertBefore(div,app)
     /*
     *con la funcion setTimeout(function(){ proceso a ejecutar }, milisegundo);
     *vamos a remover las alertas creadas despues de un cierto tiempo
     */
    setTimeout(function(){
        //seleccionamos la clase alert y la removemos
        document.querySelector('.alert').remove();
    },2000);
    }
}
 

//Dom Events
document.getElementById('form-add')
.addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const lastname=document.getElementById('lastname').value;
    const degree=document.getElementById('degree').value;
    const group=document.getElementById('group').value;
    const subject=document.getElementById('subject').value;
    const Students= new NewStudents(name,lastname,degree,group,subject);
    //creamos un nuevo objeto en la clase ui y despues accedemos al metodo addstudents
    const ui= new UI();
    //le pasamos a Students
    ui.AddStudent(Students);
    ui.ShowMessages('successfully added student.','success');   
    e.preventDefault();
  });
  
  function DeleteStudent(id){
    let row = id.parentNode.parentNode;
    row.parentNode.removeChild(row);
    const ui= new UI();
    ui.ShowMessages('Student successfully deleted.','danger');
  }