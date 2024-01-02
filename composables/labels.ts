import labels from '../static/labels.json';
export function useLabels() {
    // This composable can be use to retrieve the correct translation if locale is needed

    return labels;
}
