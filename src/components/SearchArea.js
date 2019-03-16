import React from 'react'


export default function SearchArea(props) {
  return (
    <div className="container">
       <form action="#" onSubmit={props.handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
                    <i className="material-icons">search</i>
                </label>
                <div className="mdl-textfield__expandable-holder">
                    <input className="mdl-textfield__input" type="text" id="sample6" name="movie-nane" placeholder="Search Movie" defaultValue={props.searchValue} onChange={props.onChange} />
                </div>
            </div>
        </form>
                    
    </div>
  )
}
