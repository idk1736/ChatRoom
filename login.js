// Sample valid room names and passwords
const validCredentials = {
    room1: 'password1',
    room2: 'password2',
    // Add more room-password pairs as needed
};

function login() {
    const roomName = document.getElementById('roomName').value;
    const password = document.getElementById('password').value;

    // Check if the entered room name exists in validCredentials
    if (validCredentials.hasOwnProperty(roomName)) {
        // Check if the entered password matches the stored password for the room
        if (password === validCredentials[roomName]) {
            // Redirect to /chatroom
            window.location.href = '/chatroom';
        } else {
            // Incorrect password
            alert('Invalid password. Please try again.');
        }
    } else {
        // Room name does not exist
        alert('Invalid room name. Please try again.');
    }
}
