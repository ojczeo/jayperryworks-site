<script>
  export let svg,
    size = '',
    margin = ''

  let classes = ''
  export { classes as class }

  let marginClass = margin ? `space-${margin}` : ''
</script>

<style type="text/scss">
  @use 'config/scale';

  .icon {
    $size: 1em;
    --icon-size: #{$size};

    color: inherit;
    display: inline-block;
    fill: currentColor !important;
    height: $size;
    height: var(--icon-size);
    margin-top: -0.15em; /* scooch up a little on the baseline */
    max-height: 100%;
    max-width: 100%;
    pointer-events: none;
    vertical-align: middle;
    width: $size;
    width: var(--icon-size);

    :global(svg) {
      display: block;
      fill: currentColor !important;
      margin: 0;
      max-height: 100%;
      width: 100%;
      vertical-align: top;
    }
  }

  .small {
    --icon-size: #{scale.get(-2, $unit: 1em)};
  }

  .large {
    --icon-size: #{scale.get(2, $unit: 1em)};
  }

  .xlarge {
    --icon-size: #{scale.get(4, $unit: 1em)};
  }

  .space-right {
    margin-right: 0.25em;
  }

  .space-left {
    margin-left: 0.25em;
  }
</style>

<span class="icon {size} {marginClass} {classes}">
  {@html svg}
</span>
