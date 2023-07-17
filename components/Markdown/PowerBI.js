import { PowerBIEmbed } from 'powerbi-client-react';

const PowerBI = ({url}) => {
    return (
        <PowerBIEmbed
            embedConfig = {{
                type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                id: undefined, 
                embedUrl: url,
                accessToken: undefined,    // Keep as empty string, null or undefined
                tokenType: models.TokenType.Embed
            }}
        />
    );
}

export default PowerBI;