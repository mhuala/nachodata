"use client"
import { PowerBIEmbed } from 'powerbi-client-react';

const PowerBi = ({embedUrl,id,token}) => {
    return (

        <PowerBIEmbed
            embedConfig = {{
                type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                id: id, 
                embedUrl: embedUrl,
                accessToken: token,    // Keep as empty string, null or undefined
                tokenType: 0
            }}
            cssClassName={"Embed-container"}
        />
        
    );
}

export default PowerBi;