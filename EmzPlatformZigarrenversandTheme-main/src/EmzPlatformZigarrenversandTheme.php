<?php
declare(strict_types=1);

namespace Emz\PlatformZigarrenversandTheme;

use Shopware\Core\Framework\Plugin;
use Shopware\Storefront\Framework\ThemeInterface;

class EmzPlatformZigarrenversandTheme extends Plugin implements ThemeInterface
{
    public function getThemeConfigPath(): string
    {
        return 'theme.json';
    }

}