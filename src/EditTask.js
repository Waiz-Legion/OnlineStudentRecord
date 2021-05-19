import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import swal from 'sweetalert';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [pnum, setPnum] = useState('');
    const [panum, setPanum] = useState('');
    const [jdate, setJdate] = useState('');
    const [remarks, setRemarks] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else if(name === 'pnum'){
            setPnum(value)
        }else if(name === 'panum'){
            setPanum(value)
        }else if(name === 'jdate'){
            setJdate(value)
        }
        else{
            setRemarks(value)
        }


    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setRemarks(taskObj.Remarks)
        setPanum(taskObj.Panum)
        setPnum(taskObj.Pnum)
        setJdate(taskObj.Jdate)
        // eslint-disable-next-line
    },[])

    const handleUpdate = (e) => {
        
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Remarks'] = remarks
        tempObj["Pnum"] = pnum
        tempObj["Panum"] = panum
        tempObj["Jdate"] = jdate
        
        updateTask(tempObj)
        swal("Updated!", "Record is updated.", "success");
    }   

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Record</ModalHeader>
            <ModalBody>
            
                <div className = "form-group">
                    <form id = "myform" onSubmit={handleUpdate}>
                        <label><b>Name</b></label>
                        <input type="text" minlength = '1' maxlength = '25' placeholder = '25 words limit...' className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName" required/>
                        <label><b>Personal Contact</b></label>
                        <input type="text"  maxlength = "10" minlength = "10" placeholder = 'Enter 10 digits number...' className = "form-control" value = {pnum} onChange = {handleChange} name = "pnum" required/>
                        <label><b>Parents Contact</b></label>
                        <input type="text" minlength = '10' maxlength = '10' placeholder = 'Enter 10 digits number...' className = "form-control" value = {panum} onChange = {handleChange} name = "panum"/>
                        <label><b>Joining Date</b></label>
                        <input type="date" className = "form-control" value = {jdate} onChange = {handleChange} name = "jdate"/>
                
                        <div className = "form-group">
                            <label><b>Remarks</b></label>
                            <textarea maxlength = '70' placeholder = '70 words limit...' rows = "5" className = "form-control" value = {remarks} onChange = {handleChange} name = "remarks"></textarea>
                        </div>
                        <Button type = "submit" color="primary" >Update Record</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </form>
                </div>
                
            </ModalBody>
            <ModalFooter>
            
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;