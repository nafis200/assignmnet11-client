


const Assi2 = ({item,items,setItems,ind}) => {
    console.log(items);
    const {image,title,description,status,marks,Submittedemail} = item
    return (
        <tbody>
        <tr>
          <th>{ind + 1}</th> 
          <td>{title}</td> 
          <td>{marks}</td> 
          <td>{Submittedemail}</td> 
          <td> <button className="btn btn-warning">give mark</button></td> 
        </tr>
       
      </tbody> 
    );
};

export default Assi2;