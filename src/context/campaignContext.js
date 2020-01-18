import React, {useContext} from 'react';

const CampaignContext = React.createContext();

export default CampaignContext;
export const useCampaignContext = () => useContext(CampaignContext);