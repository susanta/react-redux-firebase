import React from 'react'

const ProjectDetails = (props) => {
    // console.log(props);
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-title">
                <span className="card-title">Project Title - {id}</span>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, sequi ea error laborum culpa accusamus accusantium temporibus deleniti officia harum delectus, animi nihil suscipit soluta sint consequuntur hic, nulla doloremque.
                </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Susanta</div>
                <div>21st September, 9.20pm</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
