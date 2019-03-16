import React from 'react'


export default function SearchArea() {
  return (
    <div className="container">
       <form action="#">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                <label class="mdl-button mdl-js-button mdl-button--icon" for="sample6">
                    <i class="material-icons">search</i>
                </label>
                <div class="mdl-textfield__expandable-holder">
                    <input class="mdl-textfield__input" type="text" id="sample6" placeholder="Search Movie"/>
                </div>
            </div>
        </form>
                    
    </div>
  )
}
