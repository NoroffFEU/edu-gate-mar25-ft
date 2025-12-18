export default function UserTeacher(){
    return /*HTML*/`
    <nav class = "profile-breadcrumb">
        <span>Dashboard</span>
        <span>&gt; </span>
        <span>Select user</span>
        <span>&gt;</span>
        <span class = "profile-breadcrumb-active"> Manage user </span>
    </nav> 

    <nav>
        <h1> Manage user </h1>
        <p>Edit the user info below:</p>
    </nav>

   <section class = "profile__card">
    <form>
        <div>
            <label for="id">ID:</label>
            <input id= "id" name= "id" type="text" value="1921840" />
        </div>
        <div>
            <label for="firstName">First name:</label>
            <input id= "firstName" name= "firstName" type="text" value="Joe"  />
        </div>
        <div>
            <label for="lastName">Last name:</label>
            <input id= "lastName" name= "lastName" type="text" value="Bloggs"  />
        </div>
        <div>
            <label for="position">Position:</label>
            <input id= "position" name= "position" type="text" value="Teacher" />
        </div>
        <div>
            <label for="dob">DOB:</label>
            <input id= "dob" name= "dob" type="text" value="19/11/1988" />
        </div>
        <div>
            <label for="email">Email:</label>
            <input id= "email" name= "email" type="text" value="joeblog2020@edugate.no" />
        </div>
        <div>
            <label for="school">School:</label>
            <input id= "school" name= "school" type="text" value="The Academy" />
        </div>
        <div class="form__button">
            <button type="button" class= "profile-update-button">Update</button>
            <button type="button" class= "profile-update-button">Delete user </button>
        </div>
    </form>

   </section>
`;

}