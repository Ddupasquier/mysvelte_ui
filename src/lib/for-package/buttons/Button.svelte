<script lang="ts">
  export let disabled = false;
  export let background = '#c50eff';
  export let color = '#fff';
  export let size = 'medium';
  export let text = '';

  $: size =
    size === 'medium'
      ? '0.5rem 1rem'
      : size === 'xsmall'
      ? '0.125rem 0.25rem'
      : size === 'small'
      ? '0.25rem 0.5rem'
      : size === 'large'
      ? '0.75rem 1.5rem'
      : size === 'xlarge'
      ? '1rem 2rem'
      : size;

  $: enabledStyle = `background: ${background}; color: ${color}; padding: ${size};`;

  $: disabledStyle = `background: #ccc; pointer-events: none; padding: ${size};`;
</script>

<button {disabled} style={disabled ? disabledStyle : enabledStyle}>
  <slot>
    {text}
  </slot>
</button>

<style lang="scss">
  button {
    border: none;
    border-radius: 0.3rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }
</style>
