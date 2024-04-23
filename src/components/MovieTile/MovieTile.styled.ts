import styled from 'styled-components';
import { Colors } from '../../Colors';

export const MovieInfo = styled.div`
  display: flex;
`;

export const Title = styled.span`
  text-align: start;
  width: 80%;
  font-weight: 700;
`;

export const Year = styled.span`
  text-align: center;
  border: 1px solid ${Colors.Background};
  border-radius: 5px;
  width: 20%;
  height: fit-content;
`;

export const GenreList = styled.div`
  text-align: start;
  font-size: 0.9rem;
  font-weight: 300;
`;

export const ContextMenu = styled.div`
  position: absolute;
  right: 0;
`;

export const ContextMenuButton = styled.button`
  border-radius: 40px;
  width: 40px;
  height: 40px;
  margin: 0.5rem;
  background-color: ${Colors.Workspace};
`;

export const Ellipsis = styled.span`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  color: white;
  writing-mode: vertical-lr;
  font-size: 2em;
  width: 20px;
`;

export const ContextMenuContent = styled.div`
  display: grid;
  height: 100px;
  width: 200px;
  background-color: ${Colors.Workspace};
  margin: 0.5rem;
`;

export const MenuItem = styled.button`
  width: 100%;
  background-color: ${Colors.Workspace};
  color: ${Colors.SecondaryText};
`;

export const CloseContextMenuButton = styled.button`
  padding: 0;
  background-color: ${Colors.Workspace};
  color: white;
  right: 0;
  justify-self: end;
  width: 30px;
  height: 30px;
`;
