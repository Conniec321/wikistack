const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div>
      <label for="author" class="col-sm-2 control-label">Author Name</label>
      <div class="col-sm-10">
         <input id="author" name="author" type="text" class="form-control"/>
      </div>
    </div>
    
    <div>   
      <label for="authorEmail" class="col-sm-2 control-label">Author Email</label>
      <div class="col-sm-10">
        <input id="author_email" name="author_email" type="text" class="form-control"/>
       </div>
    </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>
      <label for="content" class="col-sm-2 control-label">Page Content</label>
      <div class="col-sm-10">
        <textarea id="content" name="content" type="text" class="form-control"> </textarea>
      </div>
    <div>
    
    </div>
    
    <div>
      <label for="status"> Page Status </label>
      <select name="status" id="status">
        <option value="open"> open </option>
        <option value="closed"> close </option>
        </select>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);