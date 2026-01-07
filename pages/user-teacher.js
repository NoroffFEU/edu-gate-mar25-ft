export default function UserTeacher(){
    return /*HTML*/`
    <nav class = "profile-breadcrumb">
        <span>Dashboard</span>
        <span>&gt;</span>
        <span>Select user</span>
        <span>&gt;</span>
        <span class = "profile-breadcrumb-active">Manage user</span>
    </nav> 

    <header class = "profile-header">
        <h1>Manage user</h1>
        <p>Edit the user info below:</p>
    </header>

   <section class = "profile__card">
    <form id= "userTeacherForm">
        <div class = "userInfo">
            <label for="id" class = "userInfo-label">ID:</label>
            <input 
                id= "id" 
                name= "id" 
                type="text" 
                value="1921840" 
                readonly
            />
        </div>
        <div class = "userInfo">
            <label for="firstName" class = "userInfo-label">First name:</label>
            <input 
                id= "firstName" 
                name= "firstName" 
                type="text" 
                value="Joe" 
                data-required 
            />
        </div>
        <div class = "userInfo">
            <label for="lastName" class = "userInfo-label">Last name:</label>
            <input 
                id= "lastName" 
                name= "lastName" 
                type="text" 
                value="Bloggs"  
                data-required
            />
        </div>
        <div class = "userInfo">
            <label for="position" class = "userInfo-label">Position:</label>
            <input 
                id= "position" 
                name= "position" 
                type="text" 
                value="Teacher" 
                data-required
            />
        </div>
        <div class = "userInfo">
            <label for="dob" class = "userInfo-label">DOB:</label>
            <input 
                id= "dob" 
                name= "dob" 
                type="text" 
                value="19/11/1988" 
                data-required
            />
        </div>
        <div class = "userInfo">
            <label for="email" class = "userInfo-label">Email:</label>
            <input 
                id= "email" 
                name= "email" 
                type="email" 
                value="joeblog2020@edugate.no" 
                data-required
            />
        </div>
        <div class = "userInfo">
            <label for="school" class = "userInfo-label">School:</label>
            <input 
                id= "school" 
                name= "school" 
                type="text" 
                value="The Academy" 
                readonly
            />
        </div>

        <div class="form__button">
            <button type="submit" class= "profile-update-button">Update</button>
            <button type="button" class= "profile-delete-button">Delete user</button>
        </div>
    </form>

   </section>
`;

}