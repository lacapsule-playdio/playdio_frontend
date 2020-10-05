export default function(playlist =[],action){
    if(action.type== 'addName'){        
        return action.info
    } else if(action.type == 'addInfoPlaylistSpotify'){
        playlist.idSpotifPlaylist=action.info
        return playlist
    } else if(action.type == 'addSong'){  
        playlist.listMusic.push(action.info)
        return playlist
    } else if(action.type == 'deleteSong'){
        let newPlaylist=playlist
        newPlaylist.listMusic.splice(action.info,1)
        return playlist
    } else if(action.type == 'addUrl'){
        console.log("ajout URL", action.info.idRadio)    
        playlist.urlPlaylist=action.info.idRadio
        return playlist
    } else{
        return playlist
    }
}