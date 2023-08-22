import { PowerBIEmbed } from 'powerbi-client-react';

const PowerBI = ({embedUrl,id}) => {
    return (
        <PowerBIEmbed
            embedConfig = {{
                type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                id: id, 
                embedUrl: embedUrl,
                accessToken: undefined,    // Keep as empty string, null or undefined
                tokenType: models.TokenType.Embed
            }}
        />
    );
}

export default PowerBI;