<script lang="ts">
    import { Button } from "$lib";
    
    export let action: ((e: MouseEvent) => void) | null | undefined;
    export let props:
        | {
              [x: string]: any;
              disabled?: boolean | undefined;
              size?:
                  | "small"
                  | "xsmall"
                  | "medium"
                  | "large"
                  | "xlarge"
                  | undefined;
              background?: string | undefined;
              animated?: boolean | undefined;
              color?: string | undefined;
              text?: string | undefined;
              isLoading?: boolean | undefined;
              isError?: boolean | undefined;
              style?: string | undefined;
          }
        | undefined;
    export let text: string = "";
</script>

<Button on:click={action} {...props}>
    {text}
</Button>
