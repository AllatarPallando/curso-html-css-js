let session_user = getUserData();
if (!checkUserData()){
    location.href = 'index.html';
} else{
    setHistoryData(session_user.user);
}