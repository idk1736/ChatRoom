function login() {
    const roomName = document.getElementById('roomName').value;
    const password = document.getElementById('password').value;

    // Add logic to check roomName and password
    // If correct, redirect to /chatroom
    if (roomName === 'yourRoomName' && password === 'yourPassword') {
        window.location.href = '/chatroom';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}
