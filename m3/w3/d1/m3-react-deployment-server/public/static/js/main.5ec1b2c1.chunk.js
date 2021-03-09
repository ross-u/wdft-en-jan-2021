(this["webpackJsonpproject-management-client"]=this["webpackJsonpproject-management-client"]||[]).push([[0],{30:function(t,e,n){t.exports=n(62)},35:function(t,e,n){},36:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(28),i=n.n(c),o=(n(35),n(3)),l=n(4),s=n(6),u=n(5),p=(n(36),n(1)),h=n(11),m=n(14),d=n.n(m),f=new(function(){function t(){Object(o.a)(this,t),this.api=d.a.create({baseURL:"https://deployment-jan-2021.herokuapp.com",withCredentials:!0})}return Object(l.a)(t,[{key:"getAllProjects",value:function(){return this.api.get("/api/projects").then((function(t){return t.data}))}},{key:"getProjectById",value:function(t){return this.api.get("/api/projects/".concat(t)).then((function(t){return t.data}))}},{key:"addProject",value:function(t){return this.api.post("/api/projects",t).then((function(t){return t.data}))}},{key:"updateProject",value:function(t,e){return this.api.put("/api/projects/".concat(t),e).then((function(t){return t.data}))}},{key:"deleteProject",value:function(t){return this.api.delete("/api/projects/".concat(t)).then((function(t){return t.data}))}}]),t}()),j=n(13),v=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleFormSubmit=function(t){t.preventDefault();var e=a.state,n=e.title,r=e.description;f.addProject({title:n,description:r}).then((function(){a.props.getData(),a.setState({title:"",description:""})})).catch((function(t){return console.log(t)}))},a.handleChange=function(t){var e=t.target,n=e.name,r=e.value;a.setState(Object(j.a)({},n,r))},a.state={title:"",description:""},a}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:function(e){return t.handleChange(e)}}),r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",value:this.state.description,onChange:function(e){return t.handleChange(e)}}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),n}(a.Component),g=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={listOfProjects:[]},t.getAllProjects=function(){f.getAllProjects().then((function(e){t.setState({listOfProjects:e})}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getAllProjects()}},{key:"render",value:function(){var t=this.state.listOfProjects;return r.a.createElement("div",null," ",r.a.createElement(v,{getData:this.getAllProjects}),r.a.createElement("div",null,t.map((function(t){return r.a.createElement("div",{key:t._id,className:"project"},r.a.createElement(h.b,{to:"/projects/".concat(t._id)},r.a.createElement("h3",null,t.title),r.a.createElement("p",null,t.description," ")))}))))}}]),n}(a.Component),b=function(){return r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:"/projects"},"Projects"))))},E=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleFormSubmit=function(t){t.preventDefault();var e=a.state,n=e.title,r=e.description,c=a.props.theProject._id;f.updateProject(c,{title:n,description:r}).then((function(){a.props.history.push("/projects")})).catch((function(t){return console.log(t)}))},a.handleChange=function(t){var e=t.target,n=e.name,r=e.value;a.setState(Object(j.a)({},n,r))},a.state={title:a.props.theProject.title,description:a.props.theProject.description},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChange}),r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",value:this.state.description,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),n}(a.Component),k=new(function(){function t(){Object(o.a)(this,t),this.api=d.a.create({baseURL:"https://deployment-jan-2021.herokuapp.com",withCredentials:!0})}return Object(l.a)(t,[{key:"getTaskById",value:function(t,e){return this.api.get("/api/projects/".concat(t,"/tasks/").concat(e)).then((function(t){return t.data}))}},{key:"addTask",value:function(t){return this.api.post("/api/tasks",t).then((function(t){return t.data}))}}]),t}()),O=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleFormSubmit=function(t){t.preventDefault();var e=a.state,n=e.title,r=e.description,c=a.props.projectID;k.addTask({title:n,description:r,projectID:c}).then((function(){a.props.getTheProject(),a.setState({title:"",description:""})})).catch((function(t){return console.log(t)}))},a.toggleForm=function(){return a.setState({isShowing:!a.state.isShowing})},a.handleChange=function(t){var e=t.target,n=e.name,r=e.value;a.setState(Object(j.a)({},n,r))},a.state={title:"",description:"",isShowing:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.toggleForm}," Add task "),this.state.isShowing?r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Title",name:"title",value:this.state.title,onChange:function(e){return t.handleChange(e)}}),r.a.createElement("input",{name:"description",placeholder:"Description",value:this.state.description,onChange:function(e){return t.handleChange(e)}}),r.a.createElement("button",{onClick:this.handleFormSubmit},"Submit"))):null)}}]),n}(a.Component),y=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).renderEditForm=function(){return a.state.title||a.state.description?r.a.createElement(E,Object.assign({theProject:a.state,getTheProject:a.getSingleProject},a.props)):r.a.createElement("p",null,"LOADING")},a.renderAddTaskForm=function(){return a.state.title||a.state.description?r.a.createElement(O,{projectID:a.state._id,getTheProject:a.getSingleProject}):r.a.createElement("p",null,"LOADING")},a.deleteProject=function(){var t=a.props.match.params.id;f.deleteProject(t).then((function(){return a.props.history.push("/projects")})).catch((function(t){return console.log(t)}))},a.getSingleProject=function(){var t=a.props.match.params.id;f.getProjectById(t).then((function(t){var e=t;a.setState(e)})).catch((function(t){return console.log(t)}))},a.state={title:"",description:"",tasks:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getSingleProject()}},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.title),r.a.createElement("h4",null,this.state.description),r.a.createElement(h.b,{to:"/projects"},r.a.createElement("button",null,"Back")),this.renderEditForm(),"   ",r.a.createElement("button",{onClick:function(){return t.deleteProject()}},"Delete project"),this.renderAddTaskForm(),0===this.state.tasks.length?r.a.createElement("h2",null,"NO TASKS TO DISPLAY"):this.state.tasks.map((function(e){return r.a.createElement(h.b,{key:e._id,to:"/projects/".concat(t.state._id,"/tasks/").concat(e._id)},r.a.createElement("h2",{className:"task"},e.title))})))}}]),n}(a.Component),S=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={},t.getTheTask=function(){var e=t.props.match.params,n=e.id,a=e.taskId;k.getTaskById(n,a).then((function(e){t.setState(e)})).catch((function(t){return console.log(t)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getTheTask()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"TASK DETAILS"),r.a.createElement("h2",null,this.state.title),r.a.createElement("p",null,this.state.description),r.a.createElement("button",{onClick:this.props.history.goBack},"Go Back"))}}]),n}(a.Component),P=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/projects",component:g}),r.a.createElement(p.a,{exact:!0,path:"/projects/:id",component:y}),r.a.createElement(p.a,{exact:!0,path:"/projects/:id/tasks/:taskId",component:S})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(h.a,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.5ec1b2c1.chunk.js.map