import React, { useEffect } from "react";

import { useLazyQuery } from "@apollo/client";

import { NearbyNamesContainer } from "./NearbyNamesStyles";
import { GET_NEARBY_NAMES } from "../../../../graphql/queries";

interface NearbyNamesProps {
  fetchUser: (user: String) => void;
  nameToSearchNearbies : string
}

const NearbyNames: React.FC<NearbyNamesProps> = ({ fetchUser , nameToSearchNearbies }) => {
  const [getNearbyUserNames, { data: nearbyNames }] = useLazyQuery(
    GET_NEARBY_NAMES
  );

  useEffect(() => {
    if (nameToSearchNearbies.length) {
      getNearbyUserNames({
        variables: {
          name: nameToSearchNearbies,
        },
      });
    }
  }, [nameToSearchNearbies, getNearbyUserNames]);

  return (
    <NearbyNamesContainer>
      {nearbyNames?.search?.nodes?.map(({ login }: { login: string }) => (
        <span key={login} onClick={() => fetchUser(login)}>
          {login}
        </span>
      ))}
    </NearbyNamesContainer>
  );
};

export default NearbyNames;
